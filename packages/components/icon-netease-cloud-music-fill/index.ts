import type { App } from 'vue';
import _IconNeteaseCloudMusicFill from './icon-netease-cloud-music-fill.vue';

const IconNeteaseCloudMusicFill = Object.assign(_IconNeteaseCloudMusicFill, {
  install: (app: App) => {
    app.component(_IconNeteaseCloudMusicFill.name, _IconNeteaseCloudMusicFill);
  }
});

export default IconNeteaseCloudMusicFill;