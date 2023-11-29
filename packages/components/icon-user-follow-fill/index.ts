import type { App } from 'vue';
import _IconUserFollowFill from './icon-user-follow-fill.vue';

const IconUserFollowFill = Object.assign(_IconUserFollowFill, {
  install: (app: App) => {
    app.component(_IconUserFollowFill.name, _IconUserFollowFill);
  }
});

export default IconUserFollowFill;