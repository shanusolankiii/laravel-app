<?php

namespace App\Http\Controllers;

use App\Models\LanguageMaster;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LanguageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $languages = LanguageMaster::orderBy('id', 'ASC')->paginate(5);
        return view('languages.index', compact('languages'))
            ->with('i', ($request->input('page', 1) - 1) * 5);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('languages.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $this->validate($request, [
        //     'language_name' => 'required|unique:language_masters,language_name',
        // ]);
        // dd($request->input('language_code'));
        $languages = LanguageMaster::create([
            'language_name' => $request->input('language_name'),
            'language_code' => $request->input('language_code')]);
        return redirect()->route('languages.index')
            ->with('success', 'Language created successfully');
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $languages = LanguageMaster::find($id);
        return view('languages.show', compact('languages'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $languages = LanguageMaster::find($id);
        return view('languages.edit', compact('languages'));
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
        $languages = LanguageMaster::find($id);
        $languages->language_name = $request->input('language_name');
        $languages->language_code = $request->input('language_code');
        $languages->save();
        return redirect()->route('languages.index')
            ->with('success', 'Role updated successfully');
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table("language_masters")->where('id', $id)->delete();
        return redirect()->route('languages.index')
            ->with('success', 'Language deleted successfully');
    }
}
