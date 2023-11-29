import type { App } from 'vue';
import _IconBoy from './icon-boy.vue';

const IconBoy = Object.assign(_IconBoy, {
  install: (app: App) => {
    app.component(_IconBoy.name, _IconBoy);
  }
});

export default IconBoy;