import type { App } from 'vue';
import _IconLayoutBottom2Line from './icon-layout-bottom-2-line.vue';

const IconLayoutBottom2Line = Object.assign(_IconLayoutBottom2Line, {
  install: (app: App) => {
    app.component(_IconLayoutBottom2Line.name, _IconLayoutBottom2Line);
  }
});

export default IconLayoutBottom2Line;