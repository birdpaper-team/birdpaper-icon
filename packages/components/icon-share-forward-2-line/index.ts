import type { App } from 'vue';
import _IconShareForward2Line from './icon-share-forward-2-line.vue';

const IconShareForward2Line = Object.assign(_IconShareForward2Line, {
  install: (app: App) => {
    app.component(_IconShareForward2Line.name, _IconShareForward2Line);
  }
});

export default IconShareForward2Line;