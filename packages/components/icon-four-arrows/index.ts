import type { App } from 'vue';
import _IconFourArrows from './icon-four-arrows.vue';

const IconFourArrows = Object.assign(_IconFourArrows, {
  install: (app: App) => {
    app.component(_IconFourArrows.name, _IconFourArrows);
  }
});

export default IconFourArrows;