import type { App } from 'vue';
import _IconForbid2Line from './icon-forbid-2-line.vue';

const IconForbid2Line = Object.assign(_IconForbid2Line, {
  install: (app: App) => {
    app.component(_IconForbid2Line.name, _IconForbid2Line);
  }
});

export default IconForbid2Line;