import type { App } from 'vue';
import _IconLoader3Line from './icon-loader-3-line.vue';

const IconLoader3Line = Object.assign(_IconLoader3Line, {
  install: (app: App) => {
    app.component(_IconLoader3Line.name, _IconLoader3Line);
  }
});

export default IconLoader3Line;