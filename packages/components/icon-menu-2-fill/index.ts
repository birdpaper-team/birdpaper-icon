import type { App } from 'vue';
import _IconMenu2Fill from './icon-menu-2-fill.vue';

const IconMenu2Fill = Object.assign(_IconMenu2Fill, {
  install: (app: App) => {
    app.component(_IconMenu2Fill.name, _IconMenu2Fill);
  }
});

export default IconMenu2Fill;