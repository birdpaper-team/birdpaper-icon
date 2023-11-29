import type { App } from 'vue';
import _IconFlashlightLine from './icon-flashlight-line.vue';

const IconFlashlightLine = Object.assign(_IconFlashlightLine, {
  install: (app: App) => {
    app.component(_IconFlashlightLine.name, _IconFlashlightLine);
  }
});

export default IconFlashlightLine;