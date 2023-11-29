import type { App } from 'vue';
import _IconInternalData from './icon-internal-data.vue';

const IconInternalData = Object.assign(_IconInternalData, {
  install: (app: App) => {
    app.component(_IconInternalData.name, _IconInternalData);
  }
});

export default IconInternalData;