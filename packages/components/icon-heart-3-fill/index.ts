import type { App } from 'vue';
import _IconHeart3Fill from './icon-heart-3-fill.vue';

const IconHeart3Fill = Object.assign(_IconHeart3Fill, {
  install: (app: App) => {
    app.component(_IconHeart3Fill.name, _IconHeart3Fill);
  }
});

export default IconHeart3Fill;