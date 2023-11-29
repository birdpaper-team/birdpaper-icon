import type { App } from 'vue';
import _IconGhost2Line from './icon-ghost-2-line.vue';

const IconGhost2Line = Object.assign(_IconGhost2Line, {
  install: (app: App) => {
    app.component(_IconGhost2Line.name, _IconGhost2Line);
  }
});

export default IconGhost2Line;