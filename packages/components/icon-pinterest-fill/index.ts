import type { App } from 'vue';
import _IconPinterestFill from './icon-pinterest-fill.vue';

const IconPinterestFill = Object.assign(_IconPinterestFill, {
  install: (app: App) => {
    app.component(_IconPinterestFill.name, _IconPinterestFill);
  }
});

export default IconPinterestFill;