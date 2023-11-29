import type { App } from 'vue';
import _IconLungsLine from './icon-lungs-line.vue';

const IconLungsLine = Object.assign(_IconLungsLine, {
  install: (app: App) => {
    app.component(_IconLungsLine.name, _IconLungsLine);
  }
});

export default IconLungsLine;