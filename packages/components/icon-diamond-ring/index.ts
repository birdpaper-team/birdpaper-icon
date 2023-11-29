import type { App } from 'vue';
import _IconDiamondRing from './icon-diamond-ring.vue';

const IconDiamondRing = Object.assign(_IconDiamondRing, {
  install: (app: App) => {
    app.component(_IconDiamondRing.name, _IconDiamondRing);
  }
});

export default IconDiamondRing;