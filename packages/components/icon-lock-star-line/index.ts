import type { App } from 'vue';
import _IconLockStarLine from './icon-lock-star-line.vue';

const IconLockStarLine = Object.assign(_IconLockStarLine, {
  install: (app: App) => {
    app.component(_IconLockStarLine.name, _IconLockStarLine);
  }
});

export default IconLockStarLine;