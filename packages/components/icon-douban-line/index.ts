import type { App } from 'vue';
import _IconDoubanLine from './icon-douban-line.vue';

const IconDoubanLine = Object.assign(_IconDoubanLine, {
  install: (app: App) => {
    app.component(_IconDoubanLine.name, _IconDoubanLine);
  }
});

export default IconDoubanLine;