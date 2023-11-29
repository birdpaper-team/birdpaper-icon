import type { App } from 'vue';
import _IconHotspotFill from './icon-hotspot-fill.vue';

const IconHotspotFill = Object.assign(_IconHotspotFill, {
  install: (app: App) => {
    app.component(_IconHotspotFill.name, _IconHotspotFill);
  }
});

export default IconHotspotFill;