import type { App } from 'vue';
import _IconSearch2Fill from './icon-search-2-fill.vue';

const IconSearch2Fill = Object.assign(_IconSearch2Fill, {
  install: (app: App) => {
    app.component(_IconSearch2Fill.name, _IconSearch2Fill);
  }
});

export default IconSearch2Fill;