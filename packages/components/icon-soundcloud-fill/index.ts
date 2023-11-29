import type { App } from 'vue';
import _IconSoundcloudFill from './icon-soundcloud-fill.vue';

const IconSoundcloudFill = Object.assign(_IconSoundcloudFill, {
  install: (app: App) => {
    app.component(_IconSoundcloudFill.name, _IconSoundcloudFill);
  }
});

export default IconSoundcloudFill;