import type { App } from 'vue';
import _IconBookOpenFill from './icon-book-open-fill.vue';

const IconBookOpenFill = Object.assign(_IconBookOpenFill, {
  install: (app: App) => {
    app.component(_IconBookOpenFill.name, _IconBookOpenFill);
  }
});

export default IconBookOpenFill;