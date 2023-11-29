import type { App } from 'vue';
import _IconMail from './icon-mail.vue';

const IconMail = Object.assign(_IconMail, {
  install: (app: App) => {
    app.component(_IconMail.name, _IconMail);
  }
});

export default IconMail;