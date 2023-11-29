import type { App } from 'vue';
import _IconImage2Line from './icon-image-2-line.vue';

const IconImage2Line = Object.assign(_IconImage2Line, {
  install: (app: App) => {
    app.component(_IconImage2Line.name, _IconImage2Line);
  }
});

export default IconImage2Line;