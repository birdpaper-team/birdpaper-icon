import type { App } from 'vue';
import _IconChessOne from './icon-chess-one.vue';

const IconChessOne = Object.assign(_IconChessOne, {
  install: (app: App) => {
    app.component(_IconChessOne.name, _IconChessOne);
  }
});

export default IconChessOne;