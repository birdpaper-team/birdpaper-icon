import type { App } from 'vue';
import _IconVipDiamondFill from './icon-vip-diamond-fill.vue';

const IconVipDiamondFill = Object.assign(_IconVipDiamondFill, {
  install: (app: App) => {
    app.component(_IconVipDiamondFill.name, _IconVipDiamondFill);
  }
});

export default IconVipDiamondFill;