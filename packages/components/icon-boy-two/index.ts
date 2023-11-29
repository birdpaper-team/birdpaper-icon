import type { App } from 'vue';
import _IconBoyTwo from './icon-boy-two.vue';

const IconBoyTwo = Object.assign(_IconBoyTwo, {
  install: (app: App) => {
    app.component(_IconBoyTwo.name, _IconBoyTwo);
  }
});

export default IconBoyTwo;