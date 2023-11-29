import type { App } from 'vue';
import _IconMailUnreadFill from './icon-mail-unread-fill.vue';

const IconMailUnreadFill = Object.assign(_IconMailUnreadFill, {
  install: (app: App) => {
    app.component(_IconMailUnreadFill.name, _IconMailUnreadFill);
  }
});

export default IconMailUnreadFill;