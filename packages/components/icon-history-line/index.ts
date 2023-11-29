import type { App } from 'vue';
import _IconHistoryLine from './icon-history-line.vue';

const IconHistoryLine = Object.assign(_IconHistoryLine, {
  install: (app: App) => {
    app.component(_IconHistoryLine.name, _IconHistoryLine);
  }
});

export default IconHistoryLine;