import type { App } from 'vue';
import _IconLayoutLeft2Line from './icon-layout-left-2-line.vue';

const IconLayoutLeft2Line = Object.assign(_IconLayoutLeft2Line, {
  install: (app: App) => {
    app.component(_IconLayoutLeft2Line.name, _IconLayoutLeft2Line);
  }
});

export default IconLayoutLeft2Line;