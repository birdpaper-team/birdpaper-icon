import type { App } from 'vue';
import _IconQuadrilateral from './icon-quadrilateral.vue';

const IconQuadrilateral = Object.assign(_IconQuadrilateral, {
  install: (app: App) => {
    app.component(_IconQuadrilateral.name, _IconQuadrilateral);
  }
});

export default IconQuadrilateral;