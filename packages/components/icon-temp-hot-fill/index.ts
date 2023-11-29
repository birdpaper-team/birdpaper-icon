import type { App } from 'vue';
import _IconTempHotFill from './icon-temp-hot-fill.vue';

const IconTempHotFill = Object.assign(_IconTempHotFill, {
  install: (app: App) => {
    app.component(_IconTempHotFill.name, _IconTempHotFill);
  }
});

export default IconTempHotFill;