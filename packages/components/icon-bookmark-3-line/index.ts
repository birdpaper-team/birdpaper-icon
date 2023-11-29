import type { App } from 'vue';
import _IconBookmark3Line from './icon-bookmark-3-line.vue';

const IconBookmark3Line = Object.assign(_IconBookmark3Line, {
  install: (app: App) => {
    app.component(_IconBookmark3Line.name, _IconBookmark3Line);
  }
});

export default IconBookmark3Line;