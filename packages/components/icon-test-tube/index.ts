import type { App } from 'vue';
import _IconTestTube from './icon-test-tube.vue';

const IconTestTube = Object.assign(_IconTestTube, {
  install: (app: App) => {
    app.component(_IconTestTube.name, _IconTestTube);
  }
});

export default IconTestTube;