import type { App } from 'vue';
import _IconElectronicPen from './icon-electronic-pen.vue';

const IconElectronicPen = Object.assign(_IconElectronicPen, {
  install: (app: App) => {
    app.component(_IconElectronicPen.name, _IconElectronicPen);
  }
});

export default IconElectronicPen;