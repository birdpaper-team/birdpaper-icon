import type { App } from 'vue';
import _IconRouterFill from './icon-router-fill.vue';

const IconRouterFill = Object.assign(_IconRouterFill, {
  install: (app: App) => {
    app.component(_IconRouterFill.name, _IconRouterFill);
  }
});

export default IconRouterFill;