import type { App } from 'vue';
import _IconMailAddLine from './icon-mail-add-line.vue';

const IconMailAddLine = Object.assign(_IconMailAddLine, {
  install: (app: App) => {
    app.component(_IconMailAddLine.name, _IconMailAddLine);
  }
});

export default IconMailAddLine;