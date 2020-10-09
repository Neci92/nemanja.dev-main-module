import Header from './modules/header';
import Navigation from './modules/navigation';
import Footer from './modules/footer';

// name of a module must be present in the DOM in order for it to be initialized
export const modules = [
  {
    name: 'HEADER',
    constructor: Header
  },
  {
    name: 'NAVIGATION',
    constructor: Navigation
  },
  {
    name: 'FOOTER',
    constructor: Footer
  }
];
