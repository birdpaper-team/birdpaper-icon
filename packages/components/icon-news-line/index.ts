import type { App } from 'vue';
import _IconNewsLine from './icon-news-line.vue';

const IconNewsLine = Object.assign(_IconNewsLine, {
  install: (app: App) => {
    app.component(_IconNewsLine.name, _IconNewsLine);
  }
});

export default IconNewsLine;