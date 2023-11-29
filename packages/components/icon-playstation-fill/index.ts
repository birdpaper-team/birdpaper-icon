import type { App } from 'vue';
import _IconPlaystationFill from './icon-playstation-fill.vue';

const IconPlaystationFill = Object.assign(_IconPlaystationFill, {
  install: (app: App) => {
    app.component(_IconPlaystationFill.name, _IconPlaystationFill);
  }
});

export default IconPlaystationFill;