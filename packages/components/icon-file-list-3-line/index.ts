import type { App } from 'vue';
import _IconFileList3Line from './icon-file-list-3-line.vue';

const IconFileList3Line = Object.assign(_IconFileList3Line, {
  install: (app: App) => {
    app.component(_IconFileList3Line.name, _IconFileList3Line);
  }
});

export default IconFileList3Line;