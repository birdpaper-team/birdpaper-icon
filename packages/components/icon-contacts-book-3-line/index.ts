import type { App } from 'vue';
import _IconContactsBook3Line from './icon-contacts-book-3-line.vue';

const IconContactsBook3Line = Object.assign(_IconContactsBook3Line, {
  install: (app: App) => {
    app.component(_IconContactsBook3Line.name, _IconContactsBook3Line);
  }
});

export default IconContactsBook3Line;