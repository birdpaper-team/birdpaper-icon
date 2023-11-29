import type { App } from 'vue';
import _IconRadioFill from './icon-radio-fill.vue';

const IconRadioFill = Object.assign(_IconRadioFill, {
  install: (app: App) => {
    app.component(_IconRadioFill.name, _IconRadioFill);
  }
});

export default IconRadioFill;