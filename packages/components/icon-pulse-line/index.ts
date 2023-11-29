import type { App } from 'vue';
import _IconPulseLine from './icon-pulse-line.vue';

const IconPulseLine = Object.assign(_IconPulseLine, {
  install: (app: App) => {
    app.component(_IconPulseLine.name, _IconPulseLine);
  }
});

export default IconPulseLine;