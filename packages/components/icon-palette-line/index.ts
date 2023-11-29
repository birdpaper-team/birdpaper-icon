import type { App } from 'vue';
import _IconPaletteLine from './icon-palette-line.vue';

const IconPaletteLine = Object.assign(_IconPaletteLine, {
  install: (app: App) => {
    app.component(_IconPaletteLine.name, _IconPaletteLine);
  }
});

export default IconPaletteLine;