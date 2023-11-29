import type { App } from 'vue';
import _IconProjector2Line from './icon-projector-2-line.vue';

const IconProjector2Line = Object.assign(_IconProjector2Line, {
  install: (app: App) => {
    app.component(_IconProjector2Line.name, _IconProjector2Line);
  }
});

export default IconProjector2Line;