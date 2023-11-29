import type { App } from 'vue';
import _IconCopperDiamondFill from './icon-copper-diamond-fill.vue';

const IconCopperDiamondFill = Object.assign(_IconCopperDiamondFill, {
  install: (app: App) => {
    app.component(_IconCopperDiamondFill.name, _IconCopperDiamondFill);
  }
});

export default IconCopperDiamondFill;