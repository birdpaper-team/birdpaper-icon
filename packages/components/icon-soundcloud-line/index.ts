import type { App } from 'vue';
import _IconSoundcloudLine from './icon-soundcloud-line.vue';

const IconSoundcloudLine = Object.assign(_IconSoundcloudLine, {
  install: (app: App) => {
    app.component(_IconSoundcloudLine.name, _IconSoundcloudLine);
  }
});

export default IconSoundcloudLine;