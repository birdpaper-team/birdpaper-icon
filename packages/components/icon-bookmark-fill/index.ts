import type { App } from 'vue';
import _IconBookmarkFill from './icon-bookmark-fill.vue';

const IconBookmarkFill = Object.assign(_IconBookmarkFill, {
  install: (app: App) => {
    app.component(_IconBookmarkFill.name, _IconBookmarkFill);
  }
});

export default IconBookmarkFill;