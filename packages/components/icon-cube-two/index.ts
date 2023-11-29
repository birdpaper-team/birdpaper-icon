import type { App } from 'vue';
import _IconCubeTwo from './icon-cube-two.vue';

const IconCubeTwo = Object.assign(_IconCubeTwo, {
  install: (app: App) => {
    app.component(_IconCubeTwo.name, _IconCubeTwo);
  }
});

export default IconCubeTwo;