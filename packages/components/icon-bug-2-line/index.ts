import type { App } from 'vue';
import _IconBug2Line from './icon-bug-2-line.vue';

const IconBug2Line = Object.assign(_IconBug2Line, {
  install: (app: App) => {
    app.component(_IconBug2Line.name, _IconBug2Line);
  }
});

export default IconBug2Line;