import type { App } from 'vue';
import _IconMapDraw from './icon-map-draw.vue';

const IconMapDraw = Object.assign(_IconMapDraw, {
  install: (app: App) => {
    app.component(_IconMapDraw.name, _IconMapDraw);
  }
});

export default IconMapDraw;