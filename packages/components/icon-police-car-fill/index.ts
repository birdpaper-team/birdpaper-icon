import type { App } from 'vue';
import _IconPoliceCarFill from './icon-police-car-fill.vue';

const IconPoliceCarFill = Object.assign(_IconPoliceCarFill, {
  install: (app: App) => {
    app.component(_IconPoliceCarFill.name, _IconPoliceCarFill);
  }
});

export default IconPoliceCarFill;