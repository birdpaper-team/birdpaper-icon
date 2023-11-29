import type { App } from 'vue';
import _IconShare2Fill from './icon-share-2-fill.vue';

const IconShare2Fill = Object.assign(_IconShare2Fill, {
  install: (app: App) => {
    app.component(_IconShare2Fill.name, _IconShare2Fill);
  }
});

export default IconShare2Fill;