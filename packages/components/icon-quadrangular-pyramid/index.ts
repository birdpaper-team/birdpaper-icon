import type { App } from 'vue';
import _IconQuadrangularPyramid from './icon-quadrangular-pyramid.vue';

const IconQuadrangularPyramid = Object.assign(_IconQuadrangularPyramid, {
  install: (app: App) => {
    app.component(_IconQuadrangularPyramid.name, _IconQuadrangularPyramid);
  }
});

export default IconQuadrangularPyramid;