import type { App } from 'vue';
import _IconRadioTwo from './icon-radio-two.vue';

const IconRadioTwo = Object.assign(_IconRadioTwo, {
  install: (app: App) => {
    app.component(_IconRadioTwo.name, _IconRadioTwo);
  }
});

export default IconRadioTwo;