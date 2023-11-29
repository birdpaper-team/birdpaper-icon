import type { App } from 'vue';
import _IconGlobe from './icon-globe.vue';

const IconGlobe = Object.assign(_IconGlobe, {
  install: (app: App) => {
    app.component(_IconGlobe.name, _IconGlobe);
  }
});

export default IconGlobe;