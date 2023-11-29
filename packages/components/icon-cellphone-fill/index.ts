import type { App } from 'vue';
import _IconCellphoneFill from './icon-cellphone-fill.vue';

const IconCellphoneFill = Object.assign(_IconCellphoneFill, {
  install: (app: App) => {
    app.component(_IconCellphoneFill.name, _IconCellphoneFill);
  }
});

export default IconCellphoneFill;