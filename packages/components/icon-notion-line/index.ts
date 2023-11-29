import type { App } from 'vue';
import _IconNotionLine from './icon-notion-line.vue';

const IconNotionLine = Object.assign(_IconNotionLine, {
  install: (app: App) => {
    app.component(_IconNotionLine.name, _IconNotionLine);
  }
});

export default IconNotionLine;