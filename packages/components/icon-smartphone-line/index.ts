import type { App } from 'vue';
import _IconSmartphoneLine from './icon-smartphone-line.vue';

const IconSmartphoneLine = Object.assign(_IconSmartphoneLine, {
  install: (app: App) => {
    app.component(_IconSmartphoneLine.name, _IconSmartphoneLine);
  }
});

export default IconSmartphoneLine;