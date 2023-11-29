import type { App } from 'vue';
import _IconArticleFill from './icon-article-fill.vue';

const IconArticleFill = Object.assign(_IconArticleFill, {
  install: (app: App) => {
    app.component(_IconArticleFill.name, _IconArticleFill);
  }
});

export default IconArticleFill;