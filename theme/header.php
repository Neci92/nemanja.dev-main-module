<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#171819">
    <meta name="msapplication-navbutton-color" content="#171819">
    <meta name="apple-mobile-web-app-status-bar-style" content="#171819">
    <?php wp_head(); ?>
    <title><?php wp_title("|", true, "right"); ?>Nemanja.dev </title>

</head>
<body data-module="BARBA" data-barba="wrapper">
  <header class="header" data-module="HEADER">
    <div class="container">
      <div class="header__container">
        <a class="header__logo button button--icon" title="Home" href="<?php echo home_url(); ?>">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Logo.svg" alt="Nemanja.dev Logo">
          <div class="header__logo-text-wrapper">
            <span class="header__logo-text">Home</span>
          </div>
        </a>

        <div class="header__search">
          <?php get_search_form(); ?>
        </div>
        <?php require('template-parts/navigation.php'); ?>
      </div>

    </div>
  </header>


