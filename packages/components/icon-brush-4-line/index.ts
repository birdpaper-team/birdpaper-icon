import type { App } from 'vue';
import _IconBrush4Line from './icon-brush-4-line.vue';

const IconBrush4Line = Object.assign(_IconBrush4Line, {
  install: (app: App) => {
    app.component(_IconBrush4Line.name, _IconBrush4Line);
  }
});

export default IconBrush4Line;