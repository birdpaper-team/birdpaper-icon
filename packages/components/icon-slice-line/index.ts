import type { App } from 'vue';
import _IconSliceLine from './icon-slice-line.vue';

const IconSliceLine = Object.assign(_IconSliceLine, {
  install: (app: App) => {
    app.component(_IconSliceLine.name, _IconSliceLine);
  }
});

export default IconSliceLine;