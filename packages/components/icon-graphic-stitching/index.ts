import type { App } from 'vue';
import _IconGraphicStitching from './icon-graphic-stitching.vue';

const IconGraphicStitching = Object.assign(_IconGraphicStitching, {
  install: (app: App) => {
    app.component(_IconGraphicStitching.name, _IconGraphicStitching);
  }
});

export default IconGraphicStitching;