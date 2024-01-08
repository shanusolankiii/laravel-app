<?php

namespace App\Http\Controllers;

use App\Models\Services;
use App\Models\wp\WpServices;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return view('services.create');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $data = $request->all();
        // dd($request->hasFile( 'service_image'));
        $request->validate([
            'service_name' => 'required',
            'service_description' => 'required',
            'service_image' => 'image|mimes:jpeg,png,jpg|min:0|max:1024',
            // 'service_visibility' => 'required',
            // 'is_virtual' => 'required',
        ],
            [
                'service_name.required' => 'Service name is required',
                'service_description.required' => 'Service description is required',
                'service_image.image' => 'Not an Image, please choose an image',
                'service_image.max' => 'Image size should not bemore than 1MB',
                // 'service_visibility.required' => 'Visibility is required',
                // 'is_virtual.required' => 'Is Virtual Service is required',
            ]
        );
        if ($request['is_virtual'] == 'on') {
            $request['is_virtual'] = 1;
        } else {
            $request['is_virtual'] = 0;
        }
        if ($request['service_visibility'] == 'on') {
            $request['service_visibility'] = 1;
        } else {
            $request['service_visibility'] = 0;
        }
        if ($request->hasFile('service_image')) {
            $destinationPath = public_path('/service-images');
            $file = $request['service_image'];
            $fileName = time() . '.' . $file->clientExtension();
            $file->move($destinationPath, $fileName);
        }
        $add_new_service = Services::create([
            'service_name' => trim($request['service_name']),
            'service_description' => trim($request['service_description']),
            'service_image' => $fileName,
            'service_visibility' => trim($request['service_visibility']),
            'is_virtual' => trim($request['is_virtual']),
        ]);
        $add_new_service_wp = WpServices::create([
            'service_name' => trim($request['service_name']),
            'service_description' => trim($request['service_description']),
            'service_image' => $fileName,
            'service_visibility' => trim($request['service_visibility']),
            'is_virtual' => trim($request['is_virtual']),
        ]);
        // dd($add_new_service);
        if ($add_new_service && $add_new_service_wp) {
            session()->flash('message', 'New Service is Added!');
        } else {
            session()->flash('error', 'Failed to add service');
        }
        return redirect()->back();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
