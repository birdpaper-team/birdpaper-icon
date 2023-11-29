import type { App } from 'vue';
import _IconCheckboxBlankCircleFill from './icon-checkbox-blank-circle-fill.vue';

const IconCheckboxBlankCircleFill = Object.assign(_IconCheckboxBlankCircleFill, {
  install: (app: App) => {
    app.component(_IconCheckboxBlankCircleFill.name, _IconCheckboxBlankCircleFill);
  }
});

export default IconCheckboxBlankCircleFill;