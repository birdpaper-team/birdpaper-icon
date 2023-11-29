import type { App } from 'vue';
import _IconVipCrown2Line from './icon-vip-crown-2-line.vue';

const IconVipCrown2Line = Object.assign(_IconVipCrown2Line, {
  install: (app: App) => {
    app.component(_IconVipCrown2Line.name, _IconVipCrown2Line);
  }
});

export default IconVipCrown2Line;