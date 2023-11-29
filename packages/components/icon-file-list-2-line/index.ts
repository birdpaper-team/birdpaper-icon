import type { App } from 'vue';
import _IconFileList2Line from './icon-file-list-2-line.vue';

const IconFileList2Line = Object.assign(_IconFileList2Line, {
  install: (app: App) => {
    app.component(_IconFileList2Line.name, _IconFileList2Line);
  }
});

export default IconFileList2Line;