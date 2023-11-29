import type { App } from 'vue';
import _IconHotspotLine from './icon-hotspot-line.vue';

const IconHotspotLine = Object.assign(_IconHotspotLine, {
  install: (app: App) => {
    app.component(_IconHotspotLine.name, _IconHotspotLine);
  }
});

export default IconHotspotLine;