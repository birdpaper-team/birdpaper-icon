import type { App } from 'vue';
import _IconSixPoints from './icon-six-points.vue';

const IconSixPoints = Object.assign(_IconSixPoints, {
  install: (app: App) => {
    app.component(_IconSixPoints.name, _IconSixPoints);
  }
});

export default IconSixPoints;