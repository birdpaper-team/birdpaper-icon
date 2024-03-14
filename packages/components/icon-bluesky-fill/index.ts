import type { App } from 'vue';
import _IconBlueskyFill from './icon-bluesky-fill.vue';

const IconBlueskyFill = Object.assign(_IconBlueskyFill, {
  install: (app: App) => {
    app.component(_IconBlueskyFill.name, _IconBlueskyFill);
  }
});

export default IconBlueskyFill;