import type { App } from 'vue';
import _IconFilePaper2Fill from './icon-file-paper-2-fill.vue';

const IconFilePaper2Fill = Object.assign(_IconFilePaper2Fill, {
  install: (app: App) => {
    app.component(_IconFilePaper2Fill.name, _IconFilePaper2Fill);
  }
});

export default IconFilePaper2Fill;