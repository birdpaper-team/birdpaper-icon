import type { App } from 'vue';
import _IconMedal2Line from './icon-medal-2-line.vue';

const IconMedal2Line = Object.assign(_IconMedal2Line, {
  install: (app: App) => {
    app.component(_IconMedal2Line.name, _IconMedal2Line);
  }
});

export default IconMedal2Line;