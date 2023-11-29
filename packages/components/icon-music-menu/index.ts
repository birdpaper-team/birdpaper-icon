import type { App } from 'vue';
import _IconMusicMenu from './icon-music-menu.vue';

const IconMusicMenu = Object.assign(_IconMusicMenu, {
  install: (app: App) => {
    app.component(_IconMusicMenu.name, _IconMusicMenu);
  }
});

export default IconMusicMenu;