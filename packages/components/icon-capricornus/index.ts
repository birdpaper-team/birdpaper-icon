import type { App } from 'vue';
import _IconCapricornus from './icon-capricornus.vue';

const IconCapricornus = Object.assign(_IconCapricornus, {
  install: (app: App) => {
    app.component(_IconCapricornus.name, _IconCapricornus);
  }
});

export default IconCapricornus;