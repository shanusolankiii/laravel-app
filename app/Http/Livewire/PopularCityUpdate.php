<?php

namespace App\Http\Livewire;

use App\Models\PopularCity;
use App\Models\Wp\WpPopularCity;
use Livewire\Component;

class PopularCityUpdate extends Component
{
    public WpPopularCity $popular_city, $city_name, $city_slug, $city_lat, $city_long;
    public PopularCity $laravel_popular_city;
    public $listeners = ['delete'];
    protected $rules = [
        'popular_city.city_name' => 'required',
        'popular_city.city_slug' => 'required',
        'popular_city.city_lat' => 'required',
        'popular_city.city_long' => 'required',
    ];
    public function render()
    {
        return view('livewire.popular-city-view');
    }
    public function mount($id = null)
    {
        $this->popular_city = WpPopularCity::find($id);
        $this->laravel_popular_city = PopularCity::find($id);
    }
    public function save($id = null)
    {
        try {
            $this->validate();
            $popular_city = WpPopularCity::find($id);
            $laravel_popular_city = PopularCity::find($id);
            $popular_city->update([
                'city_name' => $this->popular_city->city_name,
                'city_slug' => $this->popular_city->city_slug,
                'city_lat' => $this->popular_city->city_lat,
                'city_long' => $this->popular_city->city_long,
            ]);
            $laravel_popular_city->update([
                'city_name' => $this->popular_city->city_name,
                'city_slug' => $this->popular_city->city_slug,
                'city_lat' => $this->popular_city->city_lat,
                'city_long' => $this->popular_city->city_long,
            ]);

            if ($popular_city && $laravel_popular_city) {
                session()->flash('message', 'City Successfully Updated.');
                return redirect()->to('hb-cpanel/popular-city/view/' . $this->popular_city->id);
            } else {
                session()->flash('error', "Something went wrong.");
                return redirect()->to('hb-cpanel/popular-city/view/' . $this->popular_city->id);
            }
        } catch (\Throwable $th) {
            session()->flash('error', "City Couldn't Updated.");
            return redirect()->to('hb-cpanel/popular-city/view/' . $this->popular_city->id);
        }

    }
    public function delete()
    {
        try {
            $this->popular_city->delete();
            $this->laravel_popular_city->delete();

            session()->flash('message', 'City Successfully Deleted.');
            return redirect()->to('hb-cpanel/popular-city');

        } catch (\Throwable $th) {
            session()->flash('error', "City Couldn't be Deleted.");
            return redirect()->to('hb-cpanel/popular-city/view/' . $this->popular_city->id);
        }
    }

}
