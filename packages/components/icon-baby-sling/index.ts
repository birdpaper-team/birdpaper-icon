import type { App } from 'vue';
import _IconBabySling from './icon-baby-sling.vue';

const IconBabySling = Object.assign(_IconBabySling, {
  install: (app: App) => {
    app.component(_IconBabySling.name, _IconBabySling);
  }
});

export default IconBabySling;