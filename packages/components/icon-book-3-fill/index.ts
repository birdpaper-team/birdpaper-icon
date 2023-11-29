import type { App } from 'vue';
import _IconBook3Fill from './icon-book-3-fill.vue';

const IconBook3Fill = Object.assign(_IconBook3Fill, {
  install: (app: App) => {
    app.component(_IconBook3Fill.name, _IconBook3Fill);
  }
});

export default IconBook3Fill;