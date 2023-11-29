import type { App } from 'vue';
import _IconRecordCircleLine from './icon-record-circle-line.vue';

const IconRecordCircleLine = Object.assign(_IconRecordCircleLine, {
  install: (app: App) => {
    app.component(_IconRecordCircleLine.name, _IconRecordCircleLine);
  }
});

export default IconRecordCircleLine;