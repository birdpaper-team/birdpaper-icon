import type { App } from 'vue';
import _IconTestTubeFill from './icon-test-tube-fill.vue';

const IconTestTubeFill = Object.assign(_IconTestTubeFill, {
  install: (app: App) => {
    app.component(_IconTestTubeFill.name, _IconTestTubeFill);
  }
});

export default IconTestTubeFill;