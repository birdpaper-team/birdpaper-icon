import type { App } from 'vue';
import _IconMergeCellsVertical from './icon-merge-cells-vertical.vue';

const IconMergeCellsVertical = Object.assign(_IconMergeCellsVertical, {
  install: (app: App) => {
    app.component(_IconMergeCellsVertical.name, _IconMergeCellsVertical);
  }
});

export default IconMergeCellsVertical;