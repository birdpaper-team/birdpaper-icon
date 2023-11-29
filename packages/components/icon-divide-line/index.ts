import type { App } from 'vue';
import _IconDivideLine from './icon-divide-line.vue';

const IconDivideLine = Object.assign(_IconDivideLine, {
  install: (app: App) => {
    app.component(_IconDivideLine.name, _IconDivideLine);
  }
});

export default IconDivideLine;