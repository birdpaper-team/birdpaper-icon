import type { App } from 'vue';
import _IconScalesLine from './icon-scales-line.vue';

const IconScalesLine = Object.assign(_IconScalesLine, {
  install: (app: App) => {
    app.component(_IconScalesLine.name, _IconScalesLine);
  }
});

export default IconScalesLine;