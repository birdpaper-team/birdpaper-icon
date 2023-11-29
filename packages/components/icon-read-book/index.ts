import type { App } from 'vue';
import _IconReadBook from './icon-read-book.vue';

const IconReadBook = Object.assign(_IconReadBook, {
  install: (app: App) => {
    app.component(_IconReadBook.name, _IconReadBook);
  }
});

export default IconReadBook;