import type { App } from 'vue';
import _IconPlug2Line from './icon-plug-2-line.vue';

const IconPlug2Line = Object.assign(_IconPlug2Line, {
  install: (app: App) => {
    app.component(_IconPlug2Line.name, _IconPlug2Line);
  }
});

export default IconPlug2Line;