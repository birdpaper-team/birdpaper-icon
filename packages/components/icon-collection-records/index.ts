import type { App } from 'vue';
import _IconCollectionRecords from './icon-collection-records.vue';

const IconCollectionRecords = Object.assign(_IconCollectionRecords, {
  install: (app: App) => {
    app.component(_IconCollectionRecords.name, _IconCollectionRecords);
  }
});

export default IconCollectionRecords;