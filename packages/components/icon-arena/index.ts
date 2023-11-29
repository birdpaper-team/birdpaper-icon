import type { App } from 'vue';
import _IconArena from './icon-arena.vue';

const IconArena = Object.assign(_IconArena, {
  install: (app: App) => {
    app.component(_IconArena.name, _IconArena);
  }
});

export default IconArena;