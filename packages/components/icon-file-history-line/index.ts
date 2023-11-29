import type { App } from 'vue';
import _IconFileHistoryLine from './icon-file-history-line.vue';

const IconFileHistoryLine = Object.assign(_IconFileHistoryLine, {
  install: (app: App) => {
    app.component(_IconFileHistoryLine.name, _IconFileHistoryLine);
  }
});

export default IconFileHistoryLine;