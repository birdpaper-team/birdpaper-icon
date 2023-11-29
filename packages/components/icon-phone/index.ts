import type { App } from 'vue';
import _IconPhone from './icon-phone.vue';

const IconPhone = Object.assign(_IconPhone, {
  install: (app: App) => {
    app.component(_IconPhone.name, _IconPhone);
  }
});

export default IconPhone;