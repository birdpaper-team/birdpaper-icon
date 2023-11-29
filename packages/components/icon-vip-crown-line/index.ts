import type { App } from 'vue';
import _IconVipCrownLine from './icon-vip-crown-line.vue';

const IconVipCrownLine = Object.assign(_IconVipCrownLine, {
  install: (app: App) => {
    app.component(_IconVipCrownLine.name, _IconVipCrownLine);
  }
});

export default IconVipCrownLine;