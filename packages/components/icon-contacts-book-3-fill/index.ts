import type { App } from 'vue';
import _IconContactsBook3Fill from './icon-contacts-book-3-fill.vue';

const IconContactsBook3Fill = Object.assign(_IconContactsBook3Fill, {
  install: (app: App) => {
    app.component(_IconContactsBook3Fill.name, _IconContactsBook3Fill);
  }
});

export default IconContactsBook3Fill;