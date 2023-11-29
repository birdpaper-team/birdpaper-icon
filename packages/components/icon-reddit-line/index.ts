import type { App } from 'vue';
import _IconRedditLine from './icon-reddit-line.vue';

const IconRedditLine = Object.assign(_IconRedditLine, {
  install: (app: App) => {
    app.component(_IconRedditLine.name, _IconRedditLine);
  }
});

export default IconRedditLine;