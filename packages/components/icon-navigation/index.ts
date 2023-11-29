import type { App } from 'vue';
import _IconNavigation from './icon-navigation.vue';

const IconNavigation = Object.assign(_IconNavigation, {
  install: (app: App) => {
    app.component(_IconNavigation.name, _IconNavigation);
  }
});

export default IconNavigation;