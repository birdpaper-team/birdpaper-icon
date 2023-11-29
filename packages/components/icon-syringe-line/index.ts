import type { App } from 'vue';
import _IconSyringeLine from './icon-syringe-line.vue';

const IconSyringeLine = Object.assign(_IconSyringeLine, {
  install: (app: App) => {
    app.component(_IconSyringeLine.name, _IconSyringeLine);
  }
});

export default IconSyringeLine;