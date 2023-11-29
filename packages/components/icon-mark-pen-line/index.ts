import type { App } from 'vue';
import _IconMarkPenLine from './icon-mark-pen-line.vue';

const IconMarkPenLine = Object.assign(_IconMarkPenLine, {
  install: (app: App) => {
    app.component(_IconMarkPenLine.name, _IconMarkPenLine);
  }
});

export default IconMarkPenLine;