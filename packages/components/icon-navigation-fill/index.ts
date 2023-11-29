import type { App } from 'vue';
import _IconNavigationFill from './icon-navigation-fill.vue';

const IconNavigationFill = Object.assign(_IconNavigationFill, {
  install: (app: App) => {
    app.component(_IconNavigationFill.name, _IconNavigationFill);
  }
});

export default IconNavigationFill;