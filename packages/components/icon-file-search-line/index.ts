import type { App } from 'vue';
import _IconFileSearchLine from './icon-file-search-line.vue';

const IconFileSearchLine = Object.assign(_IconFileSearchLine, {
  install: (app: App) => {
    app.component(_IconFileSearchLine.name, _IconFileSearchLine);
  }
});

export default IconFileSearchLine;