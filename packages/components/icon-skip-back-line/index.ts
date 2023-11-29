import type { App } from 'vue';
import _IconSkipBackLine from './icon-skip-back-line.vue';

const IconSkipBackLine = Object.assign(_IconSkipBackLine, {
  install: (app: App) => {
    app.component(_IconSkipBackLine.name, _IconSkipBackLine);
  }
});

export default IconSkipBackLine;