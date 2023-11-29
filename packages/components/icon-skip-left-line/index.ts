import type { App } from 'vue';
import _IconSkipLeftLine from './icon-skip-left-line.vue';

const IconSkipLeftLine = Object.assign(_IconSkipLeftLine, {
  install: (app: App) => {
    app.component(_IconSkipLeftLine.name, _IconSkipLeftLine);
  }
});

export default IconSkipLeftLine;