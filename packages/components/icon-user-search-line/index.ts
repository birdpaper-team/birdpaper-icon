import type { App } from 'vue';
import _IconUserSearchLine from './icon-user-search-line.vue';

const IconUserSearchLine = Object.assign(_IconUserSearchLine, {
  install: (app: App) => {
    app.component(_IconUserSearchLine.name, _IconUserSearchLine);
  }
});

export default IconUserSearchLine;