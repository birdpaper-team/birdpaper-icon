import type { App } from 'vue';
import _IconMenu5Fill from './icon-menu-5-fill.vue';

const IconMenu5Fill = Object.assign(_IconMenu5Fill, {
  install: (app: App) => {
    app.component(_IconMenu5Fill.name, _IconMenu5Fill);
  }
});

export default IconMenu5Fill;