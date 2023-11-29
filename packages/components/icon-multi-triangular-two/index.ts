import type { App } from 'vue';
import _IconMultiTriangularTwo from './icon-multi-triangular-two.vue';

const IconMultiTriangularTwo = Object.assign(_IconMultiTriangularTwo, {
  install: (app: App) => {
    app.component(_IconMultiTriangularTwo.name, _IconMultiTriangularTwo);
  }
});

export default IconMultiTriangularTwo;