<form role="search" method="get" class="search-form" action="<?php echo home_url( '/' ); ?>" data-module="SEARCH_FORM">
    <input type="search" class="search-form__input"
        placeholder="<?php echo esc_attr_x( 'Search …', 'placeholder' ) ?>"
        value="<?php echo get_search_query() ?>" name="s"
        title="<?php echo esc_attr_x( 'Search for:', 'label' ) ?>" />
    <button type="submit" class="search-form__button">
        <img class="search-form__button-icon" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Loupe button.svg" alt="Search icon" title="Search">
    </button>
    <button type="button" class="search-form__button" data-action="CLOSE_SEARCH">
        <img class="search-form__button-icon" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/close.svg" alt="Close button" title="Close search form" data-action="CLOSE_SEARCH">
    </button>
</form>