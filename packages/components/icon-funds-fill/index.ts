import type { App } from 'vue';
import _IconFundsFill from './icon-funds-fill.vue';

const IconFundsFill = Object.assign(_IconFundsFill, {
  install: (app: App) => {
    app.component(_IconFundsFill.name, _IconFundsFill);
  }
});

export default IconFundsFill;