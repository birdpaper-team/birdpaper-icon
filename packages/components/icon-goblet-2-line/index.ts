import type { App } from 'vue';
import _IconGoblet2Line from './icon-goblet-2-line.vue';

const IconGoblet2Line = Object.assign(_IconGoblet2Line, {
  install: (app: App) => {
    app.component(_IconGoblet2Line.name, _IconGoblet2Line);
  }
});

export default IconGoblet2Line;