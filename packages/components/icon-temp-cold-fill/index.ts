import type { App } from 'vue';
import _IconTempColdFill from './icon-temp-cold-fill.vue';

const IconTempColdFill = Object.assign(_IconTempColdFill, {
  install: (app: App) => {
    app.component(_IconTempColdFill.name, _IconTempColdFill);
  }
});

export default IconTempColdFill;