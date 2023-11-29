import type { App } from 'vue';
import _IconBallPenLine from './icon-ball-pen-line.vue';

const IconBallPenLine = Object.assign(_IconBallPenLine, {
  install: (app: App) => {
    app.component(_IconBallPenLine.name, _IconBallPenLine);
  }
});

export default IconBallPenLine;