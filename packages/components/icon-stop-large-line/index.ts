import type { App } from 'vue';
import _IconStopLargeLine from './icon-stop-large-line.vue';

const IconStopLargeLine = Object.assign(_IconStopLargeLine, {
  install: (app: App) => {
    app.component(_IconStopLargeLine.name, _IconStopLargeLine);
  }
});

export default IconStopLargeLine;