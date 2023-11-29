import type { App } from 'vue';
import _IconElectricDrill from './icon-electric-drill.vue';

const IconElectricDrill = Object.assign(_IconElectricDrill, {
  install: (app: App) => {
    app.component(_IconElectricDrill.name, _IconElectricDrill);
  }
});

export default IconElectricDrill;