import type { App } from 'vue';
import _IconAppStoreLine from './icon-app-store-line.vue';

const IconAppStoreLine = Object.assign(_IconAppStoreLine, {
  install: (app: App) => {
    app.component(_IconAppStoreLine.name, _IconAppStoreLine);
  }
});

export default IconAppStoreLine;