import type { App } from 'vue';
import _IconUserUnfollowFill from './icon-user-unfollow-fill.vue';

const IconUserUnfollowFill = Object.assign(_IconUserUnfollowFill, {
  install: (app: App) => {
    app.component(_IconUserUnfollowFill.name, _IconUserUnfollowFill);
  }
});

export default IconUserUnfollowFill;