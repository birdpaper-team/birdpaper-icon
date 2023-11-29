import type { App } from 'vue';
import _IconCloudStorage from './icon-cloud-storage.vue';

const IconCloudStorage = Object.assign(_IconCloudStorage, {
  install: (app: App) => {
    app.component(_IconCloudStorage.name, _IconCloudStorage);
  }
});

export default IconCloudStorage;