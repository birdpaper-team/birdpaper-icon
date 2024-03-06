import type { App } from 'vue';
import _IconFlipVertical2Line from './icon-flip-vertical-2-line.vue';

const IconFlipVertical2Line = Object.assign(_IconFlipVertical2Line, {
  install: (app: App) => {
    app.component(_IconFlipVertical2Line.name, _IconFlipVertical2Line);
  }
});

export default IconFlipVertical2Line;