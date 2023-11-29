import type { App } from 'vue';
import _IconImageEditLine from './icon-image-edit-line.vue';

const IconImageEditLine = Object.assign(_IconImageEditLine, {
  install: (app: App) => {
    app.component(_IconImageEditLine.name, _IconImageEditLine);
  }
});

export default IconImageEditLine;