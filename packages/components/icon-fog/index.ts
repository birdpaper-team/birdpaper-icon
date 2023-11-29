import type { App } from 'vue';
import _IconFog from './icon-fog.vue';

const IconFog = Object.assign(_IconFog, {
  install: (app: App) => {
    app.component(_IconFog.name, _IconFog);
  }
});

export default IconFog;