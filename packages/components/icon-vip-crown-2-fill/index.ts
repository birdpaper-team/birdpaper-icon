import type { App } from 'vue';
import _IconVipCrown2Fill from './icon-vip-crown-2-fill.vue';

const IconVipCrown2Fill = Object.assign(_IconVipCrown2Fill, {
  install: (app: App) => {
    app.component(_IconVipCrown2Fill.name, _IconVipCrown2Fill);
  }
});

export default IconVipCrown2Fill;