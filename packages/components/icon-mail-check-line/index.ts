import type { App } from 'vue';
import _IconMailCheckLine from './icon-mail-check-line.vue';

const IconMailCheckLine = Object.assign(_IconMailCheckLine, {
  install: (app: App) => {
    app.component(_IconMailCheckLine.name, _IconMailCheckLine);
  }
});

export default IconMailCheckLine;