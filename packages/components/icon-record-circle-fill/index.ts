import type { App } from 'vue';
import _IconRecordCircleFill from './icon-record-circle-fill.vue';

const IconRecordCircleFill = Object.assign(_IconRecordCircleFill, {
  install: (app: App) => {
    app.component(_IconRecordCircleFill.name, _IconRecordCircleFill);
  }
});

export default IconRecordCircleFill;