import type { App } from 'vue';
import _IconArchive2Fill from './icon-archive-2-fill.vue';

const IconArchive2Fill = Object.assign(_IconArchive2Fill, {
  install: (app: App) => {
    app.component(_IconArchive2Fill.name, _IconArchive2Fill);
  }
});

export default IconArchive2Fill;