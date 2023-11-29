import type { App } from 'vue';
import _IconBookReadFill from './icon-book-read-fill.vue';

const IconBookReadFill = Object.assign(_IconBookReadFill, {
  install: (app: App) => {
    app.component(_IconBookReadFill.name, _IconBookReadFill);
  }
});

export default IconBookReadFill;