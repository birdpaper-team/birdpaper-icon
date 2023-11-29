import type { App } from 'vue';
import _IconCheckboxMultipleFill from './icon-checkbox-multiple-fill.vue';

const IconCheckboxMultipleFill = Object.assign(_IconCheckboxMultipleFill, {
  install: (app: App) => {
    app.component(_IconCheckboxMultipleFill.name, _IconCheckboxMultipleFill);
  }
});

export default IconCheckboxMultipleFill;