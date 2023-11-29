import type { App } from 'vue';
import _IconPhoneTelephone from './icon-phone-telephone.vue';

const IconPhoneTelephone = Object.assign(_IconPhoneTelephone, {
  install: (app: App) => {
    app.component(_IconPhoneTelephone.name, _IconPhoneTelephone);
  }
});

export default IconPhoneTelephone;