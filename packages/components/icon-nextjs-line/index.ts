import type { App } from 'vue';
import _IconNextjsLine from './icon-nextjs-line.vue';

const IconNextjsLine = Object.assign(_IconNextjsLine, {
  install: (app: App) => {
    app.component(_IconNextjsLine.name, _IconNextjsLine);
  }
});

export default IconNextjsLine;