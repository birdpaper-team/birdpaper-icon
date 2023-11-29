import type { App } from 'vue';
import _IconLandSurveying from './icon-land-surveying.vue';

const IconLandSurveying = Object.assign(_IconLandSurveying, {
  install: (app: App) => {
    app.component(_IconLandSurveying.name, _IconLandSurveying);
  }
});

export default IconLandSurveying;