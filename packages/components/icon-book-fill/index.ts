import type { App } from 'vue';
import _IconBookFill from './icon-book-fill.vue';

const IconBookFill = Object.assign(_IconBookFill, {
  install: (app: App) => {
    app.component(_IconBookFill.name, _IconBookFill);
  }
});

export default IconBookFill;