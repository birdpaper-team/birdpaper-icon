import type { App } from 'vue';
import _IconMore2Fill from './icon-more-2-fill.vue';

const IconMore2Fill = Object.assign(_IconMore2Fill, {
  install: (app: App) => {
    app.component(_IconMore2Fill.name, _IconMore2Fill);
  }
});

export default IconMore2Fill;