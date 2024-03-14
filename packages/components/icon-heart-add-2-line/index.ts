import type { App } from 'vue';
import _IconHeartAdd2Line from './icon-heart-add-2-line.vue';

const IconHeartAdd2Line = Object.assign(_IconHeartAdd2Line, {
  install: (app: App) => {
    app.component(_IconHeartAdd2Line.name, _IconHeartAdd2Line);
  }
});

export default IconHeartAdd2Line;