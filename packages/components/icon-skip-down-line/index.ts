import type { App } from 'vue';
import _IconSkipDownLine from './icon-skip-down-line.vue';

const IconSkipDownLine = Object.assign(_IconSkipDownLine, {
  install: (app: App) => {
    app.component(_IconSkipDownLine.name, _IconSkipDownLine);
  }
});

export default IconSkipDownLine;