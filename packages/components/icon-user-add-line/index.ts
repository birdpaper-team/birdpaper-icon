import type { App } from 'vue';
import _IconUserAddLine from './icon-user-add-line.vue';

const IconUserAddLine = Object.assign(_IconUserAddLine, {
  install: (app: App) => {
    app.component(_IconUserAddLine.name, _IconUserAddLine);
  }
});

export default IconUserAddLine;