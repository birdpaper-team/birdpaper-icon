import type { App } from 'vue';
import _IconBowlLine from './icon-bowl-line.vue';

const IconBowlLine = Object.assign(_IconBowlLine, {
  install: (app: App) => {
    app.component(_IconBowlLine.name, _IconBowlLine);
  }
});

export default IconBowlLine;