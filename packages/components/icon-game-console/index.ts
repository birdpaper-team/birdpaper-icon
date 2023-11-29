import type { App } from 'vue';
import _IconGameConsole from './icon-game-console.vue';

const IconGameConsole = Object.assign(_IconGameConsole, {
  install: (app: App) => {
    app.component(_IconGameConsole.name, _IconGameConsole);
  }
});

export default IconGameConsole;