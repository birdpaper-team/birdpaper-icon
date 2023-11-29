import type { App } from 'vue';
import _IconLayoutRight2Line from './icon-layout-right-2-line.vue';

const IconLayoutRight2Line = Object.assign(_IconLayoutRight2Line, {
  install: (app: App) => {
    app.component(_IconLayoutRight2Line.name, _IconLayoutRight2Line);
  }
});

export default IconLayoutRight2Line;