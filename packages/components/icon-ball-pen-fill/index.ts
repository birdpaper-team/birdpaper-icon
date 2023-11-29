import type { App } from 'vue';
import _IconBallPenFill from './icon-ball-pen-fill.vue';

const IconBallPenFill = Object.assign(_IconBallPenFill, {
  install: (app: App) => {
    app.component(_IconBallPenFill.name, _IconBallPenFill);
  }
});

export default IconBallPenFill;