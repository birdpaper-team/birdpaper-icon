import type { App } from 'vue';
import _IconCube from './icon-cube.vue';

const IconCube = Object.assign(_IconCube, {
  install: (app: App) => {
    app.component(_IconCube.name, _IconCube);
  }
});

export default IconCube;