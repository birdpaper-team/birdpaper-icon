import type { App } from 'vue';
import _IconMediumLine from './icon-medium-line.vue';

const IconMediumLine = Object.assign(_IconMediumLine, {
  install: (app: App) => {
    app.component(_IconMediumLine.name, _IconMediumLine);
  }
});

export default IconMediumLine;