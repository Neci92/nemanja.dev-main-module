import { generateGuid } from './utils';
import { modules } from './modules';

class App {
  module: {};
  constructor(modules: any) {
    this.initModules(modules);
  }

  initModules(modules: any) {
    let moduleElements: any = document.querySelectorAll('[data-module]') || [];

    if (!moduleElements.length) {
      console.warn('MISSING MODULES: No modules were defined on the page, please check your HTML');
      return this;
    }

    moduleElements.forEach((element: any) => {
      const elementModule = element.getAttribute('data-module');

      modules.forEach((module: any) => {
        if (module.name === elementModule) {
          this.module[`${module.name}-${generateGuid()}`]= new module.constructor(this, element);
        }
      });
    });
  }

  emitEvent({ name, payload }: { name: any, payload: any }) {
    const event = new CustomEvent(name, {
      detail: payload,
      bubbles: true,
      cancelable: true
    });

    document.dispatchEvent(event);
  }
}

const app = new App(modules);
export default app;

// for debugging
declare global {
  interface Window { APP: any; }
}

window.APP = app || {};
