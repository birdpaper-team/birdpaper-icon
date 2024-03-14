import type { App } from 'vue';
import _IconInformation2Line from './icon-information-2-line.vue';

const IconInformation2Line = Object.assign(_IconInformation2Line, {
  install: (app: App) => {
    app.component(_IconInformation2Line.name, _IconInformation2Line);
  }
});

export default IconInformation2Line;