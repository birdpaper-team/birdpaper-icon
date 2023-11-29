import type { App } from 'vue';
import _IconTreasureMapLine from './icon-treasure-map-line.vue';

const IconTreasureMapLine = Object.assign(_IconTreasureMapLine, {
  install: (app: App) => {
    app.component(_IconTreasureMapLine.name, _IconTreasureMapLine);
  }
});

export default IconTreasureMapLine;