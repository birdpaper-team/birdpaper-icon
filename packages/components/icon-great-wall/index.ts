import type { App } from 'vue';
import _IconGreatWall from './icon-great-wall.vue';

const IconGreatWall = Object.assign(_IconGreatWall, {
  install: (app: App) => {
    app.component(_IconGreatWall.name, _IconGreatWall);
  }
});

export default IconGreatWall;