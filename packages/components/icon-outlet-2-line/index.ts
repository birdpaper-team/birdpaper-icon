import type { App } from 'vue';
import _IconOutlet2Line from './icon-outlet-2-line.vue';

const IconOutlet2Line = Object.assign(_IconOutlet2Line, {
  install: (app: App) => {
    app.component(_IconOutlet2Line.name, _IconOutlet2Line);
  }
});

export default IconOutlet2Line;