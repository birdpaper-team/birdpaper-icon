import type { App } from 'vue';
import _IconTaskLine from './icon-task-line.vue';

const IconTaskLine = Object.assign(_IconTaskLine, {
  install: (app: App) => {
    app.component(_IconTaskLine.name, _IconTaskLine);
  }
});

export default IconTaskLine;