import type { App } from 'vue';
import _IconFridgeLine from './icon-fridge-line.vue';

const IconFridgeLine = Object.assign(_IconFridgeLine, {
  install: (app: App) => {
    app.component(_IconFridgeLine.name, _IconFridgeLine);
  }
});

export default IconFridgeLine;