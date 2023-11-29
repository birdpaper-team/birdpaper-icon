import type { App } from 'vue';
import _IconUserUnfollowLine from './icon-user-unfollow-line.vue';

const IconUserUnfollowLine = Object.assign(_IconUserUnfollowLine, {
  install: (app: App) => {
    app.component(_IconUserUnfollowLine.name, _IconUserUnfollowLine);
  }
});

export default IconUserUnfollowLine;