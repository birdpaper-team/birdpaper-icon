import type { App } from 'vue';
import _IconRadioOne from './icon-radio-one.vue';

const IconRadioOne = Object.assign(_IconRadioOne, {
  install: (app: App) => {
    app.component(_IconRadioOne.name, _IconRadioOne);
  }
});

export default IconRadioOne;