import type { App } from 'vue';
import _IconDiamondNecklace from './icon-diamond-necklace.vue';

const IconDiamondNecklace = Object.assign(_IconDiamondNecklace, {
  install: (app: App) => {
    app.component(_IconDiamondNecklace.name, _IconDiamondNecklace);
  }
});

export default IconDiamondNecklace;