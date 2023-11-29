import type { App } from 'vue';
import _IconGirl from './icon-girl.vue';

const IconGirl = Object.assign(_IconGirl, {
  install: (app: App) => {
    app.component(_IconGirl.name, _IconGirl);
  }
});

export default IconGirl;