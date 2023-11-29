import type { App } from 'vue';
import _IconFlagFill from './icon-flag-fill.vue';

const IconFlagFill = Object.assign(_IconFlagFill, {
  install: (app: App) => {
    app.component(_IconFlagFill.name, _IconFlagFill);
  }
});

export default IconFlagFill;