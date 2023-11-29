import type { App } from 'vue';
import _IconFileChart2Line from './icon-file-chart-2-line.vue';

const IconFileChart2Line = Object.assign(_IconFileChart2Line, {
  install: (app: App) => {
    app.component(_IconFileChart2Line.name, _IconFileChart2Line);
  }
});

export default IconFileChart2Line;