import type { App } from 'vue';
import _IconVip from './icon-vip.vue';

const IconVip = Object.assign(_IconVip, {
  install: (app: App) => {
    app.component(_IconVip.name, _IconVip);
  }
});

export default IconVip;