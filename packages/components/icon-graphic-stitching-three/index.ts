import type { App } from 'vue';
import _IconGraphicStitchingThree from './icon-graphic-stitching-three.vue';

const IconGraphicStitchingThree = Object.assign(_IconGraphicStitchingThree, {
  install: (app: App) => {
    app.component(_IconGraphicStitchingThree.name, _IconGraphicStitchingThree);
  }
});

export default IconGraphicStitchingThree;