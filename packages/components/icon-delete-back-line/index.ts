import type { App } from 'vue';
import _IconDeleteBackLine from './icon-delete-back-line.vue';

const IconDeleteBackLine = Object.assign(_IconDeleteBackLine, {
  install: (app: App) => {
    app.component(_IconDeleteBackLine.name, _IconDeleteBackLine);
  }
});

export default IconDeleteBackLine;