import type { App } from 'vue';
import _IconEjectLine from './icon-eject-line.vue';

const IconEjectLine = Object.assign(_IconEjectLine, {
  install: (app: App) => {
    app.component(_IconEjectLine.name, _IconEjectLine);
  }
});

export default IconEjectLine;