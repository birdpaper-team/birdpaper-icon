import type { App } from 'vue';
import _IconUDiskLine from './icon-u-disk-line.vue';

const IconUDiskLine = Object.assign(_IconUDiskLine, {
  install: (app: App) => {
    app.component(_IconUDiskLine.name, _IconUDiskLine);
  }
});

export default IconUDiskLine;