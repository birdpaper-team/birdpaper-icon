import type { App } from 'vue';
import _IconBookmark3Fill from './icon-bookmark-3-fill.vue';

const IconBookmark3Fill = Object.assign(_IconBookmark3Fill, {
  install: (app: App) => {
    app.component(_IconBookmark3Fill.name, _IconBookmark3Fill);
  }
});

export default IconBookmark3Fill;