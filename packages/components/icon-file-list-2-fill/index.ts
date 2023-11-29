import type { App } from 'vue';
import _IconFileList2Fill from './icon-file-list-2-fill.vue';

const IconFileList2Fill = Object.assign(_IconFileList2Fill, {
  install: (app: App) => {
    app.component(_IconFileList2Fill.name, _IconFileList2Fill);
  }
});

export default IconFileList2Fill;