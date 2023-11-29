import type { App } from 'vue';
import _IconShining2Line from './icon-shining-2-line.vue';

const IconShining2Line = Object.assign(_IconShining2Line, {
  install: (app: App) => {
    app.component(_IconShining2Line.name, _IconShining2Line);
  }
});

export default IconShining2Line;