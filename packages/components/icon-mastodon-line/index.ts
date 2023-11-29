import type { App } from 'vue';
import _IconMastodonLine from './icon-mastodon-line.vue';

const IconMastodonLine = Object.assign(_IconMastodonLine, {
  install: (app: App) => {
    app.component(_IconMastodonLine.name, _IconMastodonLine);
  }
});

export default IconMastodonLine;