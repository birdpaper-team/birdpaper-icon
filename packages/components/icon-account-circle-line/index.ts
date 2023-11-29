import type { App } from 'vue';
import _IconAccountCircleLine from './icon-account-circle-line.vue';

const IconAccountCircleLine = Object.assign(_IconAccountCircleLine, {
  install: (app: App) => {
    app.component(_IconAccountCircleLine.name, _IconAccountCircleLine);
  }
});

export default IconAccountCircleLine;