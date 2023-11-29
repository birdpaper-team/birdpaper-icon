import type { App } from 'vue';
import _IconSkipUpLine from './icon-skip-up-line.vue';

const IconSkipUpLine = Object.assign(_IconSkipUpLine, {
  install: (app: App) => {
    app.component(_IconSkipUpLine.name, _IconSkipUpLine);
  }
});

export default IconSkipUpLine;