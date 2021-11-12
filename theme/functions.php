<?php

add_theme_support( 'title-tag' );
add_theme_support( 'post-thumbnails' );

function wpstart_scripts() {
  wp_enqueue_script( 'app', get_stylesheet_directory_uri() . '/assets/js/app.min.js', [], time(), true );
  wp_enqueue_style( 'style', get_stylesheet_directory_uri() . '/assets/css/style.css', [], time(), $media = 'all' );
}
add_action( 'wp_enqueue_scripts', 'wpstart_scripts' );
