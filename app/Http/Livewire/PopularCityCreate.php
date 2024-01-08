<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\PopularCity;
use App\Models\Wp\WpPopularCity;

class PopularCityCreate extends Component
{
    public $city_name;
    public $city_slug;
    public $city_lat;
    public $city_long;

    protected $rules = [
        'city_name' => 'required',
        'city_slug' => 'required',
        'city_lat' => 'required',
        'city_long' => 'required',
    ];
    public function save()
    {
        $this->validate();
        $laravel_popular_cities = PopularCity::create([
            'city_name' => $this->city_name,
            'city_slug' => $this->city_slug,
            'city_lat' => $this->city_lat,
            'city_long' => $this->city_long,
        ]);
        $wp_popular_cities = WpPopularCity::create([
            'city_name' => $this->city_name,
            'city_slug' => $this->city_slug,
            'city_lat' => $this->city_lat,
            'city_long' => $this->city_long,
        ]);

        if ($laravel_popular_cities && $wp_popular_cities) {
            session()->flash('message', 'City Successfully Created.');
            return redirect()->to('/hb-cpanel/popular-city/create'); // Adjust the redirect path as per your application
        } else {
            session()->flash('error', "Something went wrong while creating the city.");
        }
    }
    public function render()
    {
        return view('livewire.popular-city-create');
    }
}
