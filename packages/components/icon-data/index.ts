import type { App } from 'vue';
import _IconData from './icon-data.vue';

const IconData = Object.assign(_IconData, {
  install: (app: App) => {
    app.component(_IconData.name, _IconData);
  }
});

export default IconData;