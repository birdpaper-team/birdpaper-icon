import type { App } from 'vue';
import _IconPanoramaHorizontal from './icon-panorama-horizontal.vue';

const IconPanoramaHorizontal = Object.assign(_IconPanoramaHorizontal, {
  install: (app: App) => {
    app.component(_IconPanoramaHorizontal.name, _IconPanoramaHorizontal);
  }
});

export default IconPanoramaHorizontal;