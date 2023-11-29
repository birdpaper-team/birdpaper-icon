import type { App } from 'vue';
import _IconBookmark2Fill from './icon-bookmark-2-fill.vue';

const IconBookmark2Fill = Object.assign(_IconBookmark2Fill, {
  install: (app: App) => {
    app.component(_IconBookmark2Fill.name, _IconBookmark2Fill);
  }
});

export default IconBookmark2Fill;