import type { App } from 'vue';
import _IconRadioButtonFill from './icon-radio-button-fill.vue';

const IconRadioButtonFill = Object.assign(_IconRadioButtonFill, {
  install: (app: App) => {
    app.component(_IconRadioButtonFill.name, _IconRadioButtonFill);
  }
});

export default IconRadioButtonFill;