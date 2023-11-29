import type { App } from 'vue';
import _IconSkipRightLine from './icon-skip-right-line.vue';

const IconSkipRightLine = Object.assign(_IconSkipRightLine, {
  install: (app: App) => {
    app.component(_IconSkipRightLine.name, _IconSkipRightLine);
  }
});

export default IconSkipRightLine;