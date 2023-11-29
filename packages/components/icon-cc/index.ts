import type { App } from 'vue';
import _IconCc from './icon-cc.vue';

const IconCc = Object.assign(_IconCc, {
  install: (app: App) => {
    app.component(_IconCc.name, _IconCc);
  }
});

export default IconCc;