import type { App } from 'vue';
import _IconMailUnreadLine from './icon-mail-unread-line.vue';

const IconMailUnreadLine = Object.assign(_IconMailUnreadLine, {
  install: (app: App) => {
    app.component(_IconMailUnreadLine.name, _IconMailUnreadLine);
  }
});

export default IconMailUnreadLine;