import type { App } from 'vue';
import _IconBookMarkFill from './icon-book-mark-fill.vue';

const IconBookMarkFill = Object.assign(_IconBookMarkFill, {
  install: (app: App) => {
    app.component(_IconBookMarkFill.name, _IconBookMarkFill);
  }
});

export default IconBookMarkFill;