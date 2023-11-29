import type { App } from 'vue';
import _IconScales3Line from './icon-scales-3-line.vue';

const IconScales3Line = Object.assign(_IconScales3Line, {
  install: (app: App) => {
    app.component(_IconScales3Line.name, _IconScales3Line);
  }
});

export default IconScales3Line;