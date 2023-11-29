import type { App } from 'vue';
import _IconFiveStarBadge from './icon-five-star-badge.vue';

const IconFiveStarBadge = Object.assign(_IconFiveStarBadge, {
  install: (app: App) => {
    app.component(_IconFiveStarBadge.name, _IconFiveStarBadge);
  }
});

export default IconFiveStarBadge;