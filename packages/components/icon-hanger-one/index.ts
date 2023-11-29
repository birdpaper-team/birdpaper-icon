import type { App } from 'vue';
import _IconHangerOne from './icon-hanger-one.vue';

const IconHangerOne = Object.assign(_IconHangerOne, {
  install: (app: App) => {
    app.component(_IconHangerOne.name, _IconHangerOne);
  }
});

export default IconHangerOne;