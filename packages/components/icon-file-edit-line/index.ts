import type { App } from 'vue';
import _IconFileEditLine from './icon-file-edit-line.vue';

const IconFileEditLine = Object.assign(_IconFileEditLine, {
  install: (app: App) => {
    app.component(_IconFileEditLine.name, _IconFileEditLine);
  }
});

export default IconFileEditLine;