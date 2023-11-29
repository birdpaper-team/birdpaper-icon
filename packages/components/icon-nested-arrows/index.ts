import type { App } from 'vue';
import _IconNestedArrows from './icon-nested-arrows.vue';

const IconNestedArrows = Object.assign(_IconNestedArrows, {
  install: (app: App) => {
    app.component(_IconNestedArrows.name, _IconNestedArrows);
  }
});

export default IconNestedArrows;