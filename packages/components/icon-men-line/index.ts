import type { App } from 'vue';
import _IconMenLine from './icon-men-line.vue';

const IconMenLine = Object.assign(_IconMenLine, {
  install: (app: App) => {
    app.component(_IconMenLine.name, _IconMenLine);
  }
});

export default IconMenLine;