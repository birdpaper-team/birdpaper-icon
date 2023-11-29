import type { App } from 'vue';
import _IconMistLine from './icon-mist-line.vue';

const IconMistLine = Object.assign(_IconMistLine, {
  install: (app: App) => {
    app.component(_IconMistLine.name, _IconMistLine);
  }
});

export default IconMistLine;