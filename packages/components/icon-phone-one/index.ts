import type { App } from 'vue';
import _IconPhoneOne from './icon-phone-one.vue';

const IconPhoneOne = Object.assign(_IconPhoneOne, {
  install: (app: App) => {
    app.component(_IconPhoneOne.name, _IconPhoneOne);
  }
});

export default IconPhoneOne;