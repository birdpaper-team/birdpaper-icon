import type { App } from 'vue';
import _IconMoveIn from './icon-move-in.vue';

const IconMoveIn = Object.assign(_IconMoveIn, {
  install: (app: App) => {
    app.component(_IconMoveIn.name, _IconMoveIn);
  }
});

export default IconMoveIn;