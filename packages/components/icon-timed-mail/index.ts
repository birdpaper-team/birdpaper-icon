import type { App } from 'vue';
import _IconTimedMail from './icon-timed-mail.vue';

const IconTimedMail = Object.assign(_IconTimedMail, {
  install: (app: App) => {
    app.component(_IconTimedMail.name, _IconTimedMail);
  }
});

export default IconTimedMail;