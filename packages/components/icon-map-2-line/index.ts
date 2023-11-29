import type { App } from 'vue';
import _IconMap2Line from './icon-map-2-line.vue';

const IconMap2Line = Object.assign(_IconMap2Line, {
  install: (app: App) => {
    app.component(_IconMap2Line.name, _IconMap2Line);
  }
});

export default IconMap2Line;