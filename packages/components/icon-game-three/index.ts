import type { App } from 'vue';
import _IconGameThree from './icon-game-three.vue';

const IconGameThree = Object.assign(_IconGameThree, {
  install: (app: App) => {
    app.component(_IconGameThree.name, _IconGameThree);
  }
});

export default IconGameThree;