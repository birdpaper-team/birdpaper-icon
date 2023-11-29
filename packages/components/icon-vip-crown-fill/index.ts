import type { App } from 'vue';
import _IconVipCrownFill from './icon-vip-crown-fill.vue';

const IconVipCrownFill = Object.assign(_IconVipCrownFill, {
  install: (app: App) => {
    app.component(_IconVipCrownFill.name, _IconVipCrownFill);
  }
});

export default IconVipCrownFill;