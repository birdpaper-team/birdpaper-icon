import type { App } from 'vue';
import _IconDvdLine from './icon-dvd-line.vue';

const IconDvdLine = Object.assign(_IconDvdLine, {
  install: (app: App) => {
    app.component(_IconDvdLine.name, _IconDvdLine);
  }
});

export default IconDvdLine;