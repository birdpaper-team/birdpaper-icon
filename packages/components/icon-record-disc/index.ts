import type { App } from 'vue';
import _IconRecordDisc from './icon-record-disc.vue';

const IconRecordDisc = Object.assign(_IconRecordDisc, {
  install: (app: App) => {
    app.component(_IconRecordDisc.name, _IconRecordDisc);
  }
});

export default IconRecordDisc;