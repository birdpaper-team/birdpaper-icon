import type { App } from 'vue';
import _IconAvatar from './icon-avatar.vue';

const IconAvatar = Object.assign(_IconAvatar, {
  install: (app: App) => {
    app.component(_IconAvatar.name, _IconAvatar);
  }
});

export default IconAvatar;