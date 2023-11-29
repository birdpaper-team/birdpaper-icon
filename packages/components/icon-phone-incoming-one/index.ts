import type { App } from 'vue';
import _IconPhoneIncomingOne from './icon-phone-incoming-one.vue';

const IconPhoneIncomingOne = Object.assign(_IconPhoneIncomingOne, {
  install: (app: App) => {
    app.component(_IconPhoneIncomingOne.name, _IconPhoneIncomingOne);
  }
});

export default IconPhoneIncomingOne;