import type { App } from 'vue';
import _IconVerifiedBadgeFill from './icon-verified-badge-fill.vue';

const IconVerifiedBadgeFill = Object.assign(_IconVerifiedBadgeFill, {
  install: (app: App) => {
    app.component(_IconVerifiedBadgeFill.name, _IconVerifiedBadgeFill);
  }
});

export default IconVerifiedBadgeFill;