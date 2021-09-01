import BarbaModule from './modules/barba';
import BlogPost from './modules/blog-post';
import Intro from './modules/intro';
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
  },
  {
    name: 'INTRO',
    constructor: Intro
  },
  {
    name: 'BLOG_POST',
    constructor: BlogPost
  }
];
