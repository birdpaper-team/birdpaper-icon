import type { App } from 'vue';
import _IconLadder from './icon-ladder.vue';

const IconLadder = Object.assign(_IconLadder, {
  install: (app: App) => {
    app.component(_IconLadder.name, _IconLadder);
  }
});

export default IconLadder;