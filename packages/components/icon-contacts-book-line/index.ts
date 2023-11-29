import type { App } from 'vue';
import _IconContactsBookLine from './icon-contacts-book-line.vue';

const IconContactsBookLine = Object.assign(_IconContactsBookLine, {
  install: (app: App) => {
    app.component(_IconContactsBookLine.name, _IconContactsBookLine);
  }
});

export default IconContactsBookLine;