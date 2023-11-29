import type { App } from 'vue';
import _IconBlazeLine from './icon-blaze-line.vue';

const IconBlazeLine = Object.assign(_IconBlazeLine, {
  install: (app: App) => {
    app.component(_IconBlazeLine.name, _IconBlazeLine);
  }
});

export default IconBlazeLine;