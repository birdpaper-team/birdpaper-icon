import type { App } from 'vue';
import _IconBookmark from './icon-bookmark.vue';

const IconBookmark = Object.assign(_IconBookmark, {
  install: (app: App) => {
    app.component(_IconBookmark.name, _IconBookmark);
  }
});

export default IconBookmark;