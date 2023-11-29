import type { App } from 'vue';
import _IconFileWord2Fill from './icon-file-word-2-fill.vue';

const IconFileWord2Fill = Object.assign(_IconFileWord2Fill, {
  install: (app: App) => {
    app.component(_IconFileWord2Fill.name, _IconFileWord2Fill);
  }
});

export default IconFileWord2Fill;