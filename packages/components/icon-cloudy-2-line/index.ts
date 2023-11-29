import type { App } from 'vue';
import _IconCloudy2Line from './icon-cloudy-2-line.vue';

const IconCloudy2Line = Object.assign(_IconCloudy2Line, {
  install: (app: App) => {
    app.component(_IconCloudy2Line.name, _IconCloudy2Line);
  }
});

export default IconCloudy2Line;