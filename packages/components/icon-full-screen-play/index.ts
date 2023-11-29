import type { App } from 'vue';
import _IconFullScreenPlay from './icon-full-screen-play.vue';

const IconFullScreenPlay = Object.assign(_IconFullScreenPlay, {
  install: (app: App) => {
    app.component(_IconFullScreenPlay.name, _IconFullScreenPlay);
  }
});

export default IconFullScreenPlay;