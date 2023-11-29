import type { App } from 'vue';
import _IconHangerTwo from './icon-hanger-two.vue';

const IconHangerTwo = Object.assign(_IconHangerTwo, {
  install: (app: App) => {
    app.component(_IconHangerTwo.name, _IconHangerTwo);
  }
});

export default IconHangerTwo;