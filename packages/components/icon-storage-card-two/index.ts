import type { App } from 'vue';
import _IconStorageCardTwo from './icon-storage-card-two.vue';

const IconStorageCardTwo = Object.assign(_IconStorageCardTwo, {
  install: (app: App) => {
    app.component(_IconStorageCardTwo.name, _IconStorageCardTwo);
  }
});

export default IconStorageCardTwo;