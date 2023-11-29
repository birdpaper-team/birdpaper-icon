import type { App } from 'vue';
import _IconBookmarkLine from './icon-bookmark-line.vue';

const IconBookmarkLine = Object.assign(_IconBookmarkLine, {
  install: (app: App) => {
    app.component(_IconBookmarkLine.name, _IconBookmarkLine);
  }
});

export default IconBookmarkLine;