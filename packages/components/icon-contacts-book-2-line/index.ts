import type { App } from 'vue';
import _IconContactsBook2Line from './icon-contacts-book-2-line.vue';

const IconContactsBook2Line = Object.assign(_IconContactsBook2Line, {
  install: (app: App) => {
    app.component(_IconContactsBook2Line.name, _IconContactsBook2Line);
  }
});

export default IconContactsBook2Line;