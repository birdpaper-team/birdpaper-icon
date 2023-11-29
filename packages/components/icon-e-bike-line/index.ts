import type { App } from 'vue';
import _IconEBikeLine from './icon-e-bike-line.vue';

const IconEBikeLine = Object.assign(_IconEBikeLine, {
  install: (app: App) => {
    app.component(_IconEBikeLine.name, _IconEBikeLine);
  }
});

export default IconEBikeLine;