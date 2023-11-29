import type { App } from 'vue';
import _IconMacbookLine from './icon-macbook-line.vue';

const IconMacbookLine = Object.assign(_IconMacbookLine, {
  install: (app: App) => {
    app.component(_IconMacbookLine.name, _IconMacbookLine);
  }
});

export default IconMacbookLine;