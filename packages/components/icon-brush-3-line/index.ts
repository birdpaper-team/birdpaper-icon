import type { App } from 'vue';
import _IconBrush3Line from './icon-brush-3-line.vue';

const IconBrush3Line = Object.assign(_IconBrush3Line, {
  install: (app: App) => {
    app.component(_IconBrush3Line.name, _IconBrush3Line);
  }
});

export default IconBrush3Line;