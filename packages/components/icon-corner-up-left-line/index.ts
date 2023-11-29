import type { App } from 'vue';
import _IconCornerUpLeftLine from './icon-corner-up-left-line.vue';

const IconCornerUpLeftLine = Object.assign(_IconCornerUpLeftLine, {
  install: (app: App) => {
    app.component(_IconCornerUpLeftLine.name, _IconCornerUpLeftLine);
  }
});

export default IconCornerUpLeftLine;