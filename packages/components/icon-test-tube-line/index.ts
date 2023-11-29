import type { App } from 'vue';
import _IconTestTubeLine from './icon-test-tube-line.vue';

const IconTestTubeLine = Object.assign(_IconTestTubeLine, {
  install: (app: App) => {
    app.component(_IconTestTubeLine.name, _IconTestTubeLine);
  }
});

export default IconTestTubeLine;