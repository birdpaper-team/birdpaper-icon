import type { App } from 'vue';
import _IconFileHwpLine from './icon-file-hwp-line.vue';

const IconFileHwpLine = Object.assign(_IconFileHwpLine, {
  install: (app: App) => {
    app.component(_IconFileHwpLine.name, _IconFileHwpLine);
  }
});

export default IconFileHwpLine;