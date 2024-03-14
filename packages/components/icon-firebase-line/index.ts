import type { App } from 'vue';
import _IconFirebaseLine from './icon-firebase-line.vue';

const IconFirebaseLine = Object.assign(_IconFirebaseLine, {
  install: (app: App) => {
    app.component(_IconFirebaseLine.name, _IconFirebaseLine);
  }
});

export default IconFirebaseLine;