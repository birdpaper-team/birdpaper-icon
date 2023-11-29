import type { App } from 'vue';
import _IconCheckboxMultipleLine from './icon-checkbox-multiple-line.vue';

const IconCheckboxMultipleLine = Object.assign(_IconCheckboxMultipleLine, {
  install: (app: App) => {
    app.component(_IconCheckboxMultipleLine.name, _IconCheckboxMultipleLine);
  }
});

export default IconCheckboxMultipleLine;