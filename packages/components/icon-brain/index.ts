import type { App } from 'vue';
import _IconBrain from './icon-brain.vue';

const IconBrain = Object.assign(_IconBrain, {
  install: (app: App) => {
    app.component(_IconBrain.name, _IconBrain);
  }
});

export default IconBrain;