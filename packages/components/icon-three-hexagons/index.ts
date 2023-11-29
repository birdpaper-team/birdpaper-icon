import type { App } from 'vue';
import _IconThreeHexagons from './icon-three-hexagons.vue';

const IconThreeHexagons = Object.assign(_IconThreeHexagons, {
  install: (app: App) => {
    app.component(_IconThreeHexagons.name, _IconThreeHexagons);
  }
});

export default IconThreeHexagons;