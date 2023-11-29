import type { App } from 'vue';
import _IconKey2Line from './icon-key-2-line.vue';

const IconKey2Line = Object.assign(_IconKey2Line, {
  install: (app: App) => {
    app.component(_IconKey2Line.name, _IconKey2Line);
  }
});

export default IconKey2Line;