import type { App } from 'vue';
import _IconMagicLine from './icon-magic-line.vue';

const IconMagicLine = Object.assign(_IconMagicLine, {
  install: (app: App) => {
    app.component(_IconMagicLine.name, _IconMagicLine);
  }
});

export default IconMagicLine;