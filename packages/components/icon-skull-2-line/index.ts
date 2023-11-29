import type { App } from 'vue';
import _IconSkull2Line from './icon-skull-2-line.vue';

const IconSkull2Line = Object.assign(_IconSkull2Line, {
  install: (app: App) => {
    app.component(_IconSkull2Line.name, _IconSkull2Line);
  }
});

export default IconSkull2Line;