import type { App } from 'vue';
import _IconRepeatLine from './icon-repeat-line.vue';

const IconRepeatLine = Object.assign(_IconRepeatLine, {
  install: (app: App) => {
    app.component(_IconRepeatLine.name, _IconRepeatLine);
  }
});

export default IconRepeatLine;