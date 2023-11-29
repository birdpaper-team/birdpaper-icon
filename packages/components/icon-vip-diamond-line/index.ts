import type { App } from 'vue';
import _IconVipDiamondLine from './icon-vip-diamond-line.vue';

const IconVipDiamondLine = Object.assign(_IconVipDiamondLine, {
  install: (app: App) => {
    app.component(_IconVipDiamondLine.name, _IconVipDiamondLine);
  }
});

export default IconVipDiamondLine;