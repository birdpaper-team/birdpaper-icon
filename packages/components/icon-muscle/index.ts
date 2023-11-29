import type { App } from 'vue';
import _IconMuscle from './icon-muscle.vue';

const IconMuscle = Object.assign(_IconMuscle, {
  install: (app: App) => {
    app.component(_IconMuscle.name, _IconMuscle);
  }
});

export default IconMuscle;