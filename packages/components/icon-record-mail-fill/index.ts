import type { App } from 'vue';
import _IconRecordMailFill from './icon-record-mail-fill.vue';

const IconRecordMailFill = Object.assign(_IconRecordMailFill, {
  install: (app: App) => {
    app.component(_IconRecordMailFill.name, _IconRecordMailFill);
  }
});

export default IconRecordMailFill;