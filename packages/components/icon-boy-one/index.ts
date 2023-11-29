import type { App } from 'vue';
import _IconBoyOne from './icon-boy-one.vue';

const IconBoyOne = Object.assign(_IconBoyOne, {
  install: (app: App) => {
    app.component(_IconBoyOne.name, _IconBoyOne);
  }
});

export default IconBoyOne;