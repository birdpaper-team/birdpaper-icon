import type { App } from 'vue';
import _IconUserSharedLine from './icon-user-shared-line.vue';

const IconUserSharedLine = Object.assign(_IconUserSharedLine, {
  install: (app: App) => {
    app.component(_IconUserSharedLine.name, _IconUserSharedLine);
  }
});

export default IconUserSharedLine;