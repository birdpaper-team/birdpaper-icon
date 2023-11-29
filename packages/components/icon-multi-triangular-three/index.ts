import type { App } from 'vue';
import _IconMultiTriangularThree from './icon-multi-triangular-three.vue';

const IconMultiTriangularThree = Object.assign(_IconMultiTriangularThree, {
  install: (app: App) => {
    app.component(_IconMultiTriangularThree.name, _IconMultiTriangularThree);
  }
});

export default IconMultiTriangularThree;