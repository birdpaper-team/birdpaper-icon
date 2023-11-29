import type { App } from 'vue';
import _IconArticleLine from './icon-article-line.vue';

const IconArticleLine = Object.assign(_IconArticleLine, {
  install: (app: App) => {
    app.component(_IconArticleLine.name, _IconArticleLine);
  }
});

export default IconArticleLine;