import type { App } from 'vue';
import _IconRouteLine from './icon-route-line.vue';

const IconRouteLine = Object.assign(_IconRouteLine, {
  install: (app: App) => {
    app.component(_IconRouteLine.name, _IconRouteLine);
  }
});

export default IconRouteLine;