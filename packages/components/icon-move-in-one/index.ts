import type { App } from 'vue';
import _IconMoveInOne from './icon-move-in-one.vue';

const IconMoveInOne = Object.assign(_IconMoveInOne, {
  install: (app: App) => {
    app.component(_IconMoveInOne.name, _IconMoveInOne);
  }
});

export default IconMoveInOne;