<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $categories = array(
            ['category_title' => 'Fertility & Pregnancy', 'category_description' => 'Fertility & Pregnancy'],
            ['category_title' => 'Mental Health', 'category_description' => 'Mental Health'],
            ['category_title' => 'Skin Care', 'category_description' => 'Skin Care'],
            ['category_title' => 'EBM', 'category_description' => 'EBM'],
            ['category_title' => 'Weight Management & Weight Loss', 'category_description' => 'Weight Management & Weight Loss'],
            ['category_title' => 'Ayurveda', 'category_description' => 'Ayurveda'],
            ['category_title' => 'Gut Health', 'category_description' => 'Gut Health'],
            ['category_title' => 'Thyroid Health', 'category_description' => 'Thyroid Health'],
            ['category_title' => 'Ethics and Jurisprudence', 'category_description' => 'Ethics and Jurisprudence'],
            ['category_title' => 'Homeopathy', 'category_description' => 'Homeopathy'],
            ['category_title' => 'Endocrinology', 'category_description' => 'Endocrinology'],
            ['category_title' => 'Lab Testing', 'category_description' => 'Lab Testing'],
            ['category_title' => "Women\'s Health", 'category_description' => "Women\'s Health"],
            ['category_title' => 'Pharmacology', 'category_description' => 'Pharmacology'],
            ['category_title' => 'Genomics Testing', 'category_description' => 'Genomics Testing'],
            ['category_title' => 'Primary Care', 'category_description' => 'Primary Care'],
            ['category_title' => 'Botanical Medicine', 'category_description' => 'Botanical Medicine'],
            ['category_title' => 'Menopause', 'category_description' => 'Menopause'],            
        );
        foreach ($categories as $key => $category) {
            $course_category = new Category();
            $course_category->category_title = $category['category_title'];
            $course_category->category_description = $category['category_description'];
            $course_category->save();
        }
    }
}
