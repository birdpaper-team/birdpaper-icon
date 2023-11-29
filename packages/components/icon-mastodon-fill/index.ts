import type { App } from 'vue';
import _IconMastodonFill from './icon-mastodon-fill.vue';

const IconMastodonFill = Object.assign(_IconMastodonFill, {
  install: (app: App) => {
    app.component(_IconMastodonFill.name, _IconMastodonFill);
  }
});

export default IconMastodonFill;