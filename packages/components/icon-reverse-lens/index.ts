import type { App } from 'vue';
import _IconReverseLens from './icon-reverse-lens.vue';

const IconReverseLens = Object.assign(_IconReverseLens, {
  install: (app: App) => {
    app.component(_IconReverseLens.name, _IconReverseLens);
  }
});

export default IconReverseLens;