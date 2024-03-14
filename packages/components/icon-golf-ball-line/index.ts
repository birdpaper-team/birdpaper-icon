import type { App } from 'vue';
import _IconGolfBallLine from './icon-golf-ball-line.vue';

const IconGolfBallLine = Object.assign(_IconGolfBallLine, {
  install: (app: App) => {
    app.component(_IconGolfBallLine.name, _IconGolfBallLine);
  }
});

export default IconGolfBallLine;