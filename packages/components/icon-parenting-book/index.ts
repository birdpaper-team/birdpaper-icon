import type { App } from 'vue';
import _IconParentingBook from './icon-parenting-book.vue';

const IconParentingBook = Object.assign(_IconParentingBook, {
  install: (app: App) => {
    app.component(_IconParentingBook.name, _IconParentingBook);
  }
});

export default IconParentingBook;