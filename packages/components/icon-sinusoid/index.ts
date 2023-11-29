import type { App } from 'vue';
import _IconSinusoid from './icon-sinusoid.vue';

const IconSinusoid = Object.assign(_IconSinusoid, {
  install: (app: App) => {
    app.component(_IconSinusoid.name, _IconSinusoid);
  }
});

export default IconSinusoid;