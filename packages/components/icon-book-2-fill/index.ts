import type { App } from 'vue';
import _IconBook2Fill from './icon-book-2-fill.vue';

const IconBook2Fill = Object.assign(_IconBook2Fill, {
  install: (app: App) => {
    app.component(_IconBook2Fill.name, _IconBook2Fill);
  }
});

export default IconBook2Fill;