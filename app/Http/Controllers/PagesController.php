<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function index()
    {
        $array = [
            [
                'title' => 'youtube',
                'link' => 'https://youtube.com'
            ],
            [
                'title' => 'facebook',
                'link' => 'https://facebook'
            ]
        ];
        return view('welcome', compact('array'));
    }
}
