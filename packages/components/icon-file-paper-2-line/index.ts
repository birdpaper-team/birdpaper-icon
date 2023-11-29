import type { App } from 'vue';
import _IconFilePaper2Line from './icon-file-paper-2-line.vue';

const IconFilePaper2Line = Object.assign(_IconFilePaper2Line, {
  install: (app: App) => {
    app.component(_IconFilePaper2Line.name, _IconFilePaper2Line);
  }
});

export default IconFilePaper2Line;