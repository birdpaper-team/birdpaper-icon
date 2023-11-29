import type { App } from 'vue';
import _IconTreasureMapFill from './icon-treasure-map-fill.vue';

const IconTreasureMapFill = Object.assign(_IconTreasureMapFill, {
  install: (app: App) => {
    app.component(_IconTreasureMapFill.name, _IconTreasureMapFill);
  }
});

export default IconTreasureMapFill;