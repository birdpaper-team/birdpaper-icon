import type { App } from 'vue';
import _IconBikeLine from './icon-bike-line.vue';

const IconBikeLine = Object.assign(_IconBikeLine, {
  install: (app: App) => {
    app.component(_IconBikeLine.name, _IconBikeLine);
  }
});

export default IconBikeLine;