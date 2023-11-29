import type { App } from 'vue';
import _IconBox3Line from './icon-box-3-line.vue';

const IconBox3Line = Object.assign(_IconBox3Line, {
  install: (app: App) => {
    app.component(_IconBox3Line.name, _IconBox3Line);
  }
});

export default IconBox3Line;