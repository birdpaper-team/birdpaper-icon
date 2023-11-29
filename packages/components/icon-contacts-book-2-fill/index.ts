import type { App } from 'vue';
import _IconContactsBook2Fill from './icon-contacts-book-2-fill.vue';

const IconContactsBook2Fill = Object.assign(_IconContactsBook2Fill, {
  install: (app: App) => {
    app.component(_IconContactsBook2Fill.name, _IconContactsBook2Fill);
  }
});

export default IconContactsBook2Fill;