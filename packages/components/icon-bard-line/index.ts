import type { App } from 'vue';
import _IconBardLine from './icon-bard-line.vue';

const IconBardLine = Object.assign(_IconBardLine, {
  install: (app: App) => {
    app.component(_IconBardLine.name, _IconBardLine);
  }
});

export default IconBardLine;