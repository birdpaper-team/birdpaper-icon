import type { App } from 'vue';
import _IconContactsBookFill from './icon-contacts-book-fill.vue';

const IconContactsBookFill = Object.assign(_IconContactsBookFill, {
  install: (app: App) => {
    app.component(_IconContactsBookFill.name, _IconContactsBookFill);
  }
});

export default IconContactsBookFill;