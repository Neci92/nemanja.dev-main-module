import BarbaModule from './modules/barba';
import Navigation from './modules/navigation';
import SearchForm from './modules/searchForm';

// name of a module must be present in the DOM in order for it to be initialized
export const modules = [
  {
    name: 'BARBA',
    constructor: BarbaModule
  },
  {
    name: 'NAVIGATION',
    constructor: Navigation
  },
  {
    name: 'SEARCH_FORM',
    constructor: SearchForm
  }
];
