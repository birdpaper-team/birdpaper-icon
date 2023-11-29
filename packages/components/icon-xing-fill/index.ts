import type { App } from 'vue';
import _IconXingFill from './icon-xing-fill.vue';

const IconXingFill = Object.assign(_IconXingFill, {
  install: (app: App) => {
    app.component(_IconXingFill.name, _IconXingFill);
  }
});

export default IconXingFill;