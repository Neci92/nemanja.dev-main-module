import BarbaModule from './modules/barba';

// name of a module must be present in the DOM in order for it to be initialized
export const modules = [
  {
    name: 'BARBA',
    constructor: BarbaModule
  }
];
