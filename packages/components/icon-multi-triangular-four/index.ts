import type { App } from 'vue';
import _IconMultiTriangularFour from './icon-multi-triangular-four.vue';

const IconMultiTriangularFour = Object.assign(_IconMultiTriangularFour, {
  install: (app: App) => {
    app.component(_IconMultiTriangularFour.name, _IconMultiTriangularFour);
  }
});

export default IconMultiTriangularFour;