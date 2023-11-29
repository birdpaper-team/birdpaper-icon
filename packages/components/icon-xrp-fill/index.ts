import type { App } from 'vue';
import _IconXrpFill from './icon-xrp-fill.vue';

const IconXrpFill = Object.assign(_IconXrpFill, {
  install: (app: App) => {
    app.component(_IconXrpFill.name, _IconXrpFill);
  }
});

export default IconXrpFill;