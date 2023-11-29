import type { App } from 'vue';
import _IconGame from './icon-game.vue';

const IconGame = Object.assign(_IconGame, {
  install: (app: App) => {
    app.component(_IconGame.name, _IconGame);
  }
});

export default IconGame;