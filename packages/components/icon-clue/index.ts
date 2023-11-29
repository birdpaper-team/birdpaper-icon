import type { App } from 'vue';
import _IconClue from './icon-clue.vue';

const IconClue = Object.assign(_IconClue, {
  install: (app: App) => {
    app.component(_IconClue.name, _IconClue);
  }
});

export default IconClue;