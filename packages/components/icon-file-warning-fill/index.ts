import type { App } from 'vue';
import _IconFileWarningFill from './icon-file-warning-fill.vue';

const IconFileWarningFill = Object.assign(_IconFileWarningFill, {
  install: (app: App) => {
    app.component(_IconFileWarningFill.name, _IconFileWarningFill);
  }
});

export default IconFileWarningFill;