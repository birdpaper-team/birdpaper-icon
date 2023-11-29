import type { App } from 'vue';
import _IconLiveLine from './icon-live-line.vue';

const IconLiveLine = Object.assign(_IconLiveLine, {
  install: (app: App) => {
    app.component(_IconLiveLine.name, _IconLiveLine);
  }
});

export default IconLiveLine;