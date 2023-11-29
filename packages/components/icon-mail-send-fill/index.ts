import type { App } from 'vue';
import _IconMailSendFill from './icon-mail-send-fill.vue';

const IconMailSendFill = Object.assign(_IconMailSendFill, {
  install: (app: App) => {
    app.component(_IconMailSendFill.name, _IconMailSendFill);
  }
});

export default IconMailSendFill;