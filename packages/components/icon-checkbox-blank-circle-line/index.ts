import type { App } from 'vue';
import _IconCheckboxBlankCircleLine from './icon-checkbox-blank-circle-line.vue';

const IconCheckboxBlankCircleLine = Object.assign(_IconCheckboxBlankCircleLine, {
  install: (app: App) => {
    app.component(_IconCheckboxBlankCircleLine.name, _IconCheckboxBlankCircleLine);
  }
});

export default IconCheckboxBlankCircleLine;