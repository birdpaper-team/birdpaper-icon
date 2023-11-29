import type { App } from 'vue';
import _IconUserFollowLine from './icon-user-follow-line.vue';

const IconUserFollowLine = Object.assign(_IconUserFollowLine, {
  install: (app: App) => {
    app.component(_IconUserFollowLine.name, _IconUserFollowLine);
  }
});

export default IconUserFollowLine;