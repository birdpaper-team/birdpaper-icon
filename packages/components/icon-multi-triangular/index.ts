import type { App } from 'vue';
import _IconMultiTriangular from './icon-multi-triangular.vue';

const IconMultiTriangular = Object.assign(_IconMultiTriangular, {
  install: (app: App) => {
    app.component(_IconMultiTriangular.name, _IconMultiTriangular);
  }
});

export default IconMultiTriangular;