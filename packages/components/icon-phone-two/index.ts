import type { App } from 'vue';
import _IconPhoneTwo from './icon-phone-two.vue';

const IconPhoneTwo = Object.assign(_IconPhoneTwo, {
  install: (app: App) => {
    app.component(_IconPhoneTwo.name, _IconPhoneTwo);
  }
});

export default IconPhoneTwo;