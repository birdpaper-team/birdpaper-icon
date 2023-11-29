import type { App } from 'vue';
import _IconMenu3Fill from './icon-menu-3-fill.vue';

const IconMenu3Fill = Object.assign(_IconMenu3Fill, {
  install: (app: App) => {
    app.component(_IconMenu3Fill.name, _IconMenu3Fill);
  }
});

export default IconMenu3Fill;