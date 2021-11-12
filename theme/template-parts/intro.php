<section class="intro" data-module="INTRO">
    <div class="container">
        <div class="intro__wrapper box-wrapper">
            <div>
                <h1 class="h1 intro__header"><?php the_title(); ?></h1>
                <div class="intro__text">
                    <?php the_content(); ?>
                    <!-- <a class="button button--primary intro__button" href="#">Contact me</a> -->
                </div>
            </div>
            <div class="intro__image">
                <img src="<?php the_post_thumbnail_url(); ?>" alt="A photo of Nemanja">
            </div>
        </div>
    </div>
</section>