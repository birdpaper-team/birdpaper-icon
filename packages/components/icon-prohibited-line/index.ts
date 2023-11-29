import type { App } from 'vue';
import _IconProhibitedLine from './icon-prohibited-line.vue';

const IconProhibitedLine = Object.assign(_IconProhibitedLine, {
  install: (app: App) => {
    app.component(_IconProhibitedLine.name, _IconProhibitedLine);
  }
});

export default IconProhibitedLine;