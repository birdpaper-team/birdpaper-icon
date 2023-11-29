import type { App } from 'vue';
import _IconCopperDiamondLine from './icon-copper-diamond-line.vue';

const IconCopperDiamondLine = Object.assign(_IconCopperDiamondLine, {
  install: (app: App) => {
    app.component(_IconCopperDiamondLine.name, _IconCopperDiamondLine);
  }
});

export default IconCopperDiamondLine;