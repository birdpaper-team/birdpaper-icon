import type { App } from 'vue';
import _IconCarWashingLine from './icon-car-washing-line.vue';

const IconCarWashingLine = Object.assign(_IconCarWashingLine, {
  install: (app: App) => {
    app.component(_IconCarWashingLine.name, _IconCarWashingLine);
  }
});

export default IconCarWashingLine;