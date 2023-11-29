import type { App } from 'vue';
import _IconFloorTile from './icon-floor-tile.vue';

const IconFloorTile = Object.assign(_IconFloorTile, {
  install: (app: App) => {
    app.component(_IconFloorTile.name, _IconFloorTile);
  }
});

export default IconFloorTile;