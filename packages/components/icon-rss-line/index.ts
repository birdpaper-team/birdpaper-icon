import type { App } from 'vue';
import _IconRssLine from './icon-rss-line.vue';

const IconRssLine = Object.assign(_IconRssLine, {
  install: (app: App) => {
    app.component(_IconRssLine.name, _IconRssLine);
  }
});

export default IconRssLine;