import type { App } from 'vue';
import _IconPaintedEggshell from './icon-painted-eggshell.vue';

const IconPaintedEggshell = Object.assign(_IconPaintedEggshell, {
  install: (app: App) => {
    app.component(_IconPaintedEggshell.name, _IconPaintedEggshell);
  }
});

export default IconPaintedEggshell;