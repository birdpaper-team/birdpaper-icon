import type { App } from 'vue';
import _IconInformationOffFill from './icon-information-off-fill.vue';

const IconInformationOffFill = Object.assign(_IconInformationOffFill, {
  install: (app: App) => {
    app.component(_IconInformationOffFill.name, _IconInformationOffFill);
  }
});

export default IconInformationOffFill;