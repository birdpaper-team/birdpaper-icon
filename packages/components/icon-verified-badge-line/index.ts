import type { App } from 'vue';
import _IconVerifiedBadgeLine from './icon-verified-badge-line.vue';

const IconVerifiedBadgeLine = Object.assign(_IconVerifiedBadgeLine, {
  install: (app: App) => {
    app.component(_IconVerifiedBadgeLine.name, _IconVerifiedBadgeLine);
  }
});

export default IconVerifiedBadgeLine;