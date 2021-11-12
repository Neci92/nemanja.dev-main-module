<section class="articles-loop">
    <div class="container">
        <div class="box-wrapper">
            <ul>
                <?php if(have_posts()) :
                        while(have_posts()) : the_post(); ?>

                            <li class="box-wrapper article-card">
                                <a href="<?php the_permalink(); ?>">
                                    <h3 class="h3"><?php the_title(); ?></h3>
                                </a>
                                <date class="date article-card__date"><?php echo get_the_date(); ?></date>
                                <p><?php the_excerpt(); ?></p>
                                <a class="button button--primary article-card__button" href="<?php the_permalink(); ?>">Read more</a>
                                <?php if ( has_post_thumbnail() ) : ?>
                                    <div class="article-card__image">
                                        <?php the_post_thumbnail('medium'); ?>
                                    </div>
                                <?php endif; ?>
                            </li>
                        <?php endwhile; ?>

                        <?php else : ?>
                            <p>Nothing found</p>

                <?php endif; ?>
            </ul>
            
            <div class="articles-loop__pagination">
                <?php echo paginate_links(); ?>
            </div>
            
        </div>
    </div>
</section>