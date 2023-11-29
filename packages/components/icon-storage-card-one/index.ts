import type { App } from 'vue';
import _IconStorageCardOne from './icon-storage-card-one.vue';

const IconStorageCardOne = Object.assign(_IconStorageCardOne, {
  install: (app: App) => {
    app.component(_IconStorageCardOne.name, _IconStorageCardOne);
  }
});

export default IconStorageCardOne;