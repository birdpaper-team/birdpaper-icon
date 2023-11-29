import type { App } from 'vue';
import _IconFlashlightFill from './icon-flashlight-fill.vue';

const IconFlashlightFill = Object.assign(_IconFlashlightFill, {
  install: (app: App) => {
    app.component(_IconFlashlightFill.name, _IconFlashlightFill);
  }
});

export default IconFlashlightFill;