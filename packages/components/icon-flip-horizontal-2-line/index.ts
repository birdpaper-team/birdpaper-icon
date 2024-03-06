import type { App } from 'vue';
import _IconFlipHorizontal2Line from './icon-flip-horizontal-2-line.vue';

const IconFlipHorizontal2Line = Object.assign(_IconFlipHorizontal2Line, {
  install: (app: App) => {
    app.component(_IconFlipHorizontal2Line.name, _IconFlipHorizontal2Line);
  }
});

export default IconFlipHorizontal2Line;