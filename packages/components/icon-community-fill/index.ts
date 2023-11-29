import type { App } from 'vue';
import _IconCommunityFill from './icon-community-fill.vue';

const IconCommunityFill = Object.assign(_IconCommunityFill, {
  install: (app: App) => {
    app.component(_IconCommunityFill.name, _IconCommunityFill);
  }
});

export default IconCommunityFill;