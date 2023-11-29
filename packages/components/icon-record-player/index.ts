import type { App } from 'vue';
import _IconRecordPlayer from './icon-record-player.vue';

const IconRecordPlayer = Object.assign(_IconRecordPlayer, {
  install: (app: App) => {
    app.component(_IconRecordPlayer.name, _IconRecordPlayer);
  }
});

export default IconRecordPlayer;