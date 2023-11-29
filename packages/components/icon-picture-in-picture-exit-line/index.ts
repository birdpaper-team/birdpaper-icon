import type { App } from 'vue';
import _IconPictureInPictureExitLine from './icon-picture-in-picture-exit-line.vue';

const IconPictureInPictureExitLine = Object.assign(_IconPictureInPictureExitLine, {
  install: (app: App) => {
    app.component(_IconPictureInPictureExitLine.name, _IconPictureInPictureExitLine);
  }
});

export default IconPictureInPictureExitLine;