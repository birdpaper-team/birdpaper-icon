import type { App } from 'vue';
import _IconRouterOne from './icon-router-one.vue';

const IconRouterOne = Object.assign(_IconRouterOne, {
  install: (app: App) => {
    app.component(_IconRouterOne.name, _IconRouterOne);
  }
});

export default IconRouterOne;