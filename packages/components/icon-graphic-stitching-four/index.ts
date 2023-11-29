import type { App } from 'vue';
import _IconGraphicStitchingFour from './icon-graphic-stitching-four.vue';

const IconGraphicStitchingFour = Object.assign(_IconGraphicStitchingFour, {
  install: (app: App) => {
    app.component(_IconGraphicStitchingFour.name, _IconGraphicStitchingFour);
  }
});

export default IconGraphicStitchingFour;