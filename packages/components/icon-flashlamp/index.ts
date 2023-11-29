import type { App } from 'vue';
import _IconFlashlamp from './icon-flashlamp.vue';

const IconFlashlamp = Object.assign(_IconFlashlamp, {
  install: (app: App) => {
    app.component(_IconFlashlamp.name, _IconFlashlamp);
  }
});

export default IconFlashlamp;