import type { App } from 'vue';
import _IconFileShield2Line from './icon-file-shield-2-line.vue';

const IconFileShield2Line = Object.assign(_IconFileShield2Line, {
  install: (app: App) => {
    app.component(_IconFileShield2Line.name, _IconFileShield2Line);
  }
});

export default IconFileShield2Line;