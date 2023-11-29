import type { App } from 'vue';
import _IconBookmark2Line from './icon-bookmark-2-line.vue';

const IconBookmark2Line = Object.assign(_IconBookmark2Line, {
  install: (app: App) => {
    app.component(_IconBookmark2Line.name, _IconBookmark2Line);
  }
});

export default IconBookmark2Line;