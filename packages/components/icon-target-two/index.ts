import type { App } from 'vue';
import _IconTargetTwo from './icon-target-two.vue';

const IconTargetTwo = Object.assign(_IconTargetTwo, {
  install: (app: App) => {
    app.component(_IconTargetTwo.name, _IconTargetTwo);
  }
});

export default IconTargetTwo;