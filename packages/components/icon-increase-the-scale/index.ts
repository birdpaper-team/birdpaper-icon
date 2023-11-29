import type { App } from 'vue';
import _IconIncreaseTheScale from './icon-increase-the-scale.vue';

const IconIncreaseTheScale = Object.assign(_IconIncreaseTheScale, {
  install: (app: App) => {
    app.component(_IconIncreaseTheScale.name, _IconIncreaseTheScale);
  }
});

export default IconIncreaseTheScale;