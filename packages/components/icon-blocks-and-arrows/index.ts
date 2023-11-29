import type { App } from 'vue';
import _IconBlocksAndArrows from './icon-blocks-and-arrows.vue';

const IconBlocksAndArrows = Object.assign(_IconBlocksAndArrows, {
  install: (app: App) => {
    app.component(_IconBlocksAndArrows.name, _IconBlocksAndArrows);
  }
});

export default IconBlocksAndArrows;