import type { App } from 'vue';
import _IconShuffleFill from './icon-shuffle-fill.vue';

const IconShuffleFill = Object.assign(_IconShuffleFill, {
  install: (app: App) => {
    app.component(_IconShuffleFill.name, _IconShuffleFill);
  }
});

export default IconShuffleFill;