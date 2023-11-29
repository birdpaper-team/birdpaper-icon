import type { App } from 'vue';
import _IconThreeTriangles from './icon-three-triangles.vue';

const IconThreeTriangles = Object.assign(_IconThreeTriangles, {
  install: (app: App) => {
    app.component(_IconThreeTriangles.name, _IconThreeTriangles);
  }
});

export default IconThreeTriangles;