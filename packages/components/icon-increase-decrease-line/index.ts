import type { App } from 'vue';
import _IconIncreaseDecreaseLine from './icon-increase-decrease-line.vue';

const IconIncreaseDecreaseLine = Object.assign(_IconIncreaseDecreaseLine, {
  install: (app: App) => {
    app.component(_IconIncreaseDecreaseLine.name, _IconIncreaseDecreaseLine);
  }
});

export default IconIncreaseDecreaseLine;