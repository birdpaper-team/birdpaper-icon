import type { App } from 'vue';
import _IconBreastPump from './icon-breast-pump.vue';

const IconBreastPump = Object.assign(_IconBreastPump, {
  install: (app: App) => {
    app.component(_IconBreastPump.name, _IconBreastPump);
  }
});

export default IconBreastPump;