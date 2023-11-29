import type { App } from 'vue';
import _IconWifiFill from './icon-wifi-fill.vue';

const IconWifiFill = Object.assign(_IconWifiFill, {
  install: (app: App) => {
    app.component(_IconWifiFill.name, _IconWifiFill);
  }
});

export default IconWifiFill;