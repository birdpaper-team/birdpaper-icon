import type { App } from 'vue';
import _IconSendOne from './icon-send-one.vue';

const IconSendOne = Object.assign(_IconSendOne, {
  install: (app: App) => {
    app.component(_IconSendOne.name, _IconSendOne);
  }
});

export default IconSendOne;