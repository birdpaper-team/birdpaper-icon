import type { App } from 'vue';
import _IconMusicList from './icon-music-list.vue';

const IconMusicList = Object.assign(_IconMusicList, {
  install: (app: App) => {
    app.component(_IconMusicList.name, _IconMusicList);
  }
});

export default IconMusicList;