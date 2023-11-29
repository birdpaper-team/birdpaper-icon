import type { App } from 'vue';
import _IconBox2Line from './icon-box-2-line.vue';

const IconBox2Line = Object.assign(_IconBox2Line, {
  install: (app: App) => {
    app.component(_IconBox2Line.name, _IconBox2Line);
  }
});

export default IconBox2Line;