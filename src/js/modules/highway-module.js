
import Highway from '@dogstudio/highway';
import DefaultTransition from './highway/transitions/default-transition';

export default class HighwayModule {
  constructor(app, element) {
    this.root = app;
    this.element = element;

    const H = new Highway.Core({
      transitions: {
        default: DefaultTransition
      }
    });


    // Listen the `NAVIGATE_IN` event
    // This event is sent everytime a `data-router-view` is added to the DOM Tree
    H.on('NAVIGATE_IN', ({ to, location }) => {
      console.log('IM NAVIGATING');
      const link = document.querySelector('.header__logo');

      // Clean class
      link.classList.remove('is-active');

      // Active link
      if (link.href === location.href) {
        link.classList.add('is-active');
      }

    });
  }
}

