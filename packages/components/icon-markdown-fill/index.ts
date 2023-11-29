import type { App } from 'vue';
import _IconMarkdownFill from './icon-markdown-fill.vue';

const IconMarkdownFill = Object.assign(_IconMarkdownFill, {
  install: (app: App) => {
    app.component(_IconMarkdownFill.name, _IconMarkdownFill);
  }
});

export default IconMarkdownFill;