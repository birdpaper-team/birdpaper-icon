import type { App } from 'vue';
import _IconMoveOne from './icon-move-one.vue';

const IconMoveOne = Object.assign(_IconMoveOne, {
  install: (app: App) => {
    app.component(_IconMoveOne.name, _IconMoveOne);
  }
});

export default IconMoveOne;