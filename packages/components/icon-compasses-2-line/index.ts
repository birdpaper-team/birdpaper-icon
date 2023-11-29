import type { App } from 'vue';
import _IconCompasses2Line from './icon-compasses-2-line.vue';

const IconCompasses2Line = Object.assign(_IconCompasses2Line, {
  install: (app: App) => {
    app.component(_IconCompasses2Line.name, _IconCompasses2Line);
  }
});

export default IconCompasses2Line;