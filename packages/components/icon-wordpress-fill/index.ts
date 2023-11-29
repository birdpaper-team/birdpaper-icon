import type { App } from 'vue';
import _IconWordpressFill from './icon-wordpress-fill.vue';

const IconWordpressFill = Object.assign(_IconWordpressFill, {
  install: (app: App) => {
    app.component(_IconWordpressFill.name, _IconWordpressFill);
  }
});

export default IconWordpressFill;