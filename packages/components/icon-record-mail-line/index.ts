import type { App } from 'vue';
import _IconRecordMailLine from './icon-record-mail-line.vue';

const IconRecordMailLine = Object.assign(_IconRecordMailLine, {
  install: (app: App) => {
    app.component(_IconRecordMailLine.name, _IconRecordMailLine);
  }
});

export default IconRecordMailLine;