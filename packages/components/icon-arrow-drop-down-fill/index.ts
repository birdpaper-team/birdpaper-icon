import type { App } from 'vue';
import _IconArrowDropDownFill from './icon-arrow-drop-down-fill.vue';

const IconArrowDropDownFill = Object.assign(_IconArrowDropDownFill, {
  install: (app: App) => {
    app.component(_IconArrowDropDownFill.name, _IconArrowDropDownFill);
  }
});

export default IconArrowDropDownFill;