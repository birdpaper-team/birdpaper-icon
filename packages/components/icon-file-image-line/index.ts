import type { App } from 'vue';
import _IconFileImageLine from './icon-file-image-line.vue';

const IconFileImageLine = Object.assign(_IconFileImageLine, {
  install: (app: App) => {
    app.component(_IconFileImageLine.name, _IconFileImageLine);
  }
});

export default IconFileImageLine;