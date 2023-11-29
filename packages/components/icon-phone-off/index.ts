import type { App } from 'vue';
import _IconPhoneOff from './icon-phone-off.vue';

const IconPhoneOff = Object.assign(_IconPhoneOff, {
  install: (app: App) => {
    app.component(_IconPhoneOff.name, _IconPhoneOff);
  }
});

export default IconPhoneOff;