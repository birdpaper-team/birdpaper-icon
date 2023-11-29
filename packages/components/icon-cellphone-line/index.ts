import type { App } from 'vue';
import _IconCellphoneLine from './icon-cellphone-line.vue';

const IconCellphoneLine = Object.assign(_IconCellphoneLine, {
  install: (app: App) => {
    app.component(_IconCellphoneLine.name, _IconCellphoneLine);
  }
});

export default IconCellphoneLine;