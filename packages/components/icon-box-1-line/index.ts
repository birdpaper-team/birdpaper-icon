import type { App } from 'vue';
import _IconBox1Line from './icon-box-1-line.vue';

const IconBox1Line = Object.assign(_IconBox1Line, {
  install: (app: App) => {
    app.component(_IconBox1Line.name, _IconBox1Line);
  }
});

export default IconBox1Line;