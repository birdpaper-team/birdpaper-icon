import type { App } from 'vue';
import _IconHomeWifiFill from './icon-home-wifi-fill.vue';

const IconHomeWifiFill = Object.assign(_IconHomeWifiFill, {
  install: (app: App) => {
    app.component(_IconHomeWifiFill.name, _IconHomeWifiFill);
  }
});

export default IconHomeWifiFill;