import type { App } from 'vue';
import _IconVipFill from './icon-vip-fill.vue';

const IconVipFill = Object.assign(_IconVipFill, {
  install: (app: App) => {
    app.component(_IconVipFill.name, _IconVipFill);
  }
});

export default IconVipFill;