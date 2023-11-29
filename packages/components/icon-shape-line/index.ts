import type { App } from 'vue';
import _IconShapeLine from './icon-shape-line.vue';

const IconShapeLine = Object.assign(_IconShapeLine, {
  install: (app: App) => {
    app.component(_IconShapeLine.name, _IconShapeLine);
  }
});

export default IconShapeLine;