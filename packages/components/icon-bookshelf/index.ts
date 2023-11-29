import type { App } from 'vue';
import _IconBookshelf from './icon-bookshelf.vue';

const IconBookshelf = Object.assign(_IconBookshelf, {
  install: (app: App) => {
    app.component(_IconBookshelf.name, _IconBookshelf);
  }
});

export default IconBookshelf;