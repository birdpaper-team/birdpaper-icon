import type { App } from 'vue';
import _IconParentLine from './icon-parent-line.vue';

const IconParentLine = Object.assign(_IconParentLine, {
  install: (app: App) => {
    app.component(_IconParentLine.name, _IconParentLine);
  }
});

export default IconParentLine;