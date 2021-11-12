<section class="blog-post" data-module="BLOG_POST">
    <div class="container">
        <div class="box-wrapper">
            <div class="blog-post__content">
                <h1 class="h1 mb blog-post__title"><?php the_title(); ?></h1>
                <?php the_content(); ?>
            </div>
        </div>

        <ul class="blog-post__latest">
            <?php $lastposts = get_posts( array(
                    'posts_per_page' => 3
                ) );

                if ( $lastposts ) {
                    foreach ( $lastposts as $post ) :
                        setup_postdata( $post ); ?>
                        <li class="box-wrapper article-card article-card--row">
                            <a href="<?php the_permalink(); ?>">
                                <h3 class="h3"><?php the_title(); ?></h3>
                            </a>
                            <date class="date article-card__date"><?php echo get_the_date(); ?></date>
                            <div class="article-card__excerpt">
                                <?php the_excerpt(); ?>
                            </div>
                            <a class="button button--primary article-card__button" title="Read more" href="<?php the_permalink(); ?>">Read more</a>
                            <?php if ( has_post_thumbnail() ) : ?>
                                <div class="article-card__image">
                                    <?php the_post_thumbnail('medium'); ?>
                                </div>
                            <?php endif; ?>
                        </li>
                    <?php
                    endforeach; 
                    wp_reset_postdata();
                }
            ?>
        </ul>
    </div>
</section>