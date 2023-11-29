import type { App } from 'vue';
import _IconBooth from './icon-booth.vue';

const IconBooth = Object.assign(_IconBooth, {
  install: (app: App) => {
    app.component(_IconBooth.name, _IconBooth);
  }
});

export default IconBooth;