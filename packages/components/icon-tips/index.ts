import type { App } from 'vue';
import _IconTips from './icon-tips.vue';

const IconTips = Object.assign(_IconTips, {
  install: (app: App) => {
    app.component(_IconTips.name, _IconTips);
  }
});

export default IconTips;