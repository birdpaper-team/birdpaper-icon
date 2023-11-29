import type { App } from 'vue';
import _IconGlassesOne from './icon-glasses-one.vue';

const IconGlassesOne = Object.assign(_IconGlassesOne, {
  install: (app: App) => {
    app.component(_IconGlassesOne.name, _IconGlassesOne);
  }
});

export default IconGlassesOne;