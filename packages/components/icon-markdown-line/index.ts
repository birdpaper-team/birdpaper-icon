import type { App } from 'vue';
import _IconMarkdownLine from './icon-markdown-line.vue';

const IconMarkdownLine = Object.assign(_IconMarkdownLine, {
  install: (app: App) => {
    app.component(_IconMarkdownLine.name, _IconMarkdownLine);
  }
});

export default IconMarkdownLine;