import type { App } from 'vue';
import _IconAedElectrodesFill from './icon-aed-electrodes-fill.vue';

const IconAedElectrodesFill = Object.assign(_IconAedElectrodesFill, {
  install: (app: App) => {
    app.component(_IconAedElectrodesFill.name, _IconAedElectrodesFill);
  }
});

export default IconAedElectrodesFill;