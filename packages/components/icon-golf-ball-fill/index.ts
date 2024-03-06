import type { App } from 'vue';
import _IconGolfBallFill from './icon-golf-ball-fill.vue';

const IconGolfBallFill = Object.assign(_IconGolfBallFill, {
  install: (app: App) => {
    app.component(_IconGolfBallFill.name, _IconGolfBallFill);
  }
});

export default IconGolfBallFill;