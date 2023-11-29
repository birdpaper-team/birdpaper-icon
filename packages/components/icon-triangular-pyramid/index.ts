import type { App } from 'vue';
import _IconTriangularPyramid from './icon-triangular-pyramid.vue';

const IconTriangularPyramid = Object.assign(_IconTriangularPyramid, {
  install: (app: App) => {
    app.component(_IconTriangularPyramid.name, _IconTriangularPyramid);
  }
});

export default IconTriangularPyramid;