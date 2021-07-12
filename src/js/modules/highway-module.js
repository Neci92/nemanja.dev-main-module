
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
  }
}

