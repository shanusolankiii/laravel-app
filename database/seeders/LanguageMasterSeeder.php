<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\LanguageMaster;


class LanguageMasterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $languages = array(
            ['language_code' => 'ab', 'language_name' => 'Abkhazian'],
            ['language_code' => 'af', 'language_name' => 'Afrikaans'],
            ['language_code' => 'sq', 'language_name' => 'Albanian'],
            ['language_code' => 'ar', 'language_name' => 'Arabic'],
            ['language_code' => 'an', 'language_name' => 'Aragonese'],
            ['language_code' => 'hy', 'language_name' => 'Armenian'],
            ['language_code' => 'as', 'language_name' => 'Assamese'],
            ['language_code' => 'az', 'language_name' => 'Azerbaijani'],
            ['language_code' => 'be', 'language_name' => 'Belarusian'],
            ['language_code' => 'bn', 'language_name' => 'Bengali'],
            ['language_code' => 'bg', 'language_name' => 'Bulgarian'],
            ['language_code' => 'my', 'language_name' => 'Burmese'],
            ['language_code' => 'zh', 'language_name' => 'Chinese'],
            ['language_code' => 'hr', 'language_name' => 'Croatian'],
            ['language_code' => 'cs', 'language_name' => 'Czech'],
            ['language_code' => 'da', 'language_name' => 'Danish'],
            ['language_code' => 'en', 'language_name' => 'English'],
            ['language_code' => 'fj', 'language_name' => 'Fijian'],
            ['language_code' => 'fi', 'language_name' => 'Finnish'],
            ['language_code' => 'ka', 'language_name' => 'Georgian'],
            ['language_code' => 'de', 'language_name' => 'German'],
            ['language_code' => 'gu', 'language_name' => 'Gujarati'],
            ['language_code' => 'hi', 'language_name' => 'Hindi'],
            ['language_code' => 'hu', 'language_name' => 'Hungarian'],
            ['language_code' => 'is', 'language_name' => 'Icelandic'],
            ['language_code' => 'id', 'language_name' => 'Indonesian'],
            ['language_code' => 'ga', 'language_name' => 'Irish'],
            ['language_code' => 'it', 'language_name' => 'Italian'],
            ['language_code' => 'ja', 'language_name' => 'Japanese'],
            ['language_code' => 'kn', 'language_name' => 'Kannada'],
            ['language_code' => 'ks', 'language_name' => 'Kashmiri'],
            ['language_code' => 'kk', 'language_name' => 'Kazakh'],
            ['language_code' => 'ko', 'language_name' => 'Korean'],
            ['language_code' => 'ku', 'language_name' => 'Kurdish'],
            ['language_code' => 'ky', 'language_name' => 'Kyrgyz'],
            ['language_code' => 'lo', 'language_name' => 'Lao'],
            ['language_code' => 'la', 'language_name' => 'Latin'],
            ['language_code' => 'ml', 'language_name' => 'Malayalam'],
            ['language_code' => 'mr', 'language_name' => 'Marathi'],
            ['language_code' => 'mh', 'language_name' => 'Marshallese'],
            ['language_code' => 'mn', 'language_name' => 'Mongolian'],
            ['language_code' => 'ne', 'language_name' => 'Nepali'],
            ['language_code' => 'no', 'language_name' => 'Norwegian'],
            ['language_code' => 'pa', 'language_name' => 'Panjabi, Punjabi'],
            ['language_code' => 'fa', 'language_name' => 'Persian'],
            ['language_code' => 'pt', 'language_name' => 'Portuguese'],
            ['language_code' => 'qu', 'language_name' => 'Quechua'],
            ['language_code' => 'rm', 'language_name' => 'Romansh'],
            ['language_code' => 'ru', 'language_name' => 'Russian'],
            ['language_code' => 'sa', 'language_name' => 'Sanskrit'],
            ['language_code' => 'sc', 'language_name' => 'Sardinian'],
            ['language_code' => 'sr', 'language_name' => 'Serbian'],
            ['language_code' => 'sn', 'language_name' => 'Shona'],
            ['language_code' => 'sd', 'language_name' => 'Sindhi'],
            ['language_code' => 'so', 'language_name' => 'Somali'],
            ['language_code' => 'es', 'language_name' => 'Spanish, Castilian'],
            ['language_code' => 'sv', 'language_name' => 'Swedish'],
            ['language_code' => 'tl', 'language_name' => 'Tagalog'],
            ['language_code' => 'ty', 'language_name' => 'Tahitian'],
            ['language_code' => 'tg', 'language_name' => 'Tajik'],
            ['language_code' => 'ta', 'language_name' => 'Tamil'],
            ['language_code' => 'te', 'language_name' => 'Telugu'],
            ['language_code' => 'th', 'language_name' => 'Thai'],
            ['language_code' => 'bo', 'language_name' => 'Tibetan'],
            ['language_code' => 'tr', 'language_name' => 'Turkish'],
            ['language_code' => 'tk', 'language_name' => 'Turkmen'],
            ['language_code' => 'uk', 'language_name' => 'Ukrainian'],
            ['language_code' => 'ur', 'language_name' => 'Urdu'],
            ['language_code' => 'uz', 'language_name' => 'Uzbek'],
        );
        foreach ($languages as $key => $language) {
            $lang = new LanguageMaster();
            $lang->language_name = $language['language_name'];
            $lang->language_code = $language['language_code'];
            $lang->save();
        }
    }
}
