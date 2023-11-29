import type { App } from 'vue';
import _IconHazeLine from './icon-haze-line.vue';

const IconHazeLine = Object.assign(_IconHazeLine, {
  install: (app: App) => {
    app.component(_IconHazeLine.name, _IconHazeLine);
  }
});

export default IconHazeLine;