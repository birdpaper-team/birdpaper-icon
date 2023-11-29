import type { App } from 'vue';
import _IconStoreLine from './icon-store-line.vue';

const IconStoreLine = Object.assign(_IconStoreLine, {
  install: (app: App) => {
    app.component(_IconStoreLine.name, _IconStoreLine);
  }
});

export default IconStoreLine;