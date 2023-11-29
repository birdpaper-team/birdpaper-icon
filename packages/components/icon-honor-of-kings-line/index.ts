import type { App } from 'vue';
import _IconHonorOfKingsLine from './icon-honor-of-kings-line.vue';

const IconHonorOfKingsLine = Object.assign(_IconHonorOfKingsLine, {
  install: (app: App) => {
    app.component(_IconHonorOfKingsLine.name, _IconHonorOfKingsLine);
  }
});

export default IconHonorOfKingsLine;