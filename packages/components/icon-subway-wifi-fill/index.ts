import type { App } from 'vue';
import _IconSubwayWifiFill from './icon-subway-wifi-fill.vue';

const IconSubwayWifiFill = Object.assign(_IconSubwayWifiFill, {
  install: (app: App) => {
    app.component(_IconSubwayWifiFill.name, _IconSubwayWifiFill);
  }
});

export default IconSubwayWifiFill;