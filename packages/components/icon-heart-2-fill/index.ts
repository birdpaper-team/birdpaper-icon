import type { App } from 'vue';
import _IconHeart2Fill from './icon-heart-2-fill.vue';

const IconHeart2Fill = Object.assign(_IconHeart2Fill, {
  install: (app: App) => {
    app.component(_IconHeart2Fill.name, _IconHeart2Fill);
  }
});

export default IconHeart2Fill;