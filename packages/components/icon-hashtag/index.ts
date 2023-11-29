import type { App } from 'vue';
import _IconHashtag from './icon-hashtag.vue';

const IconHashtag = Object.assign(_IconHashtag, {
  install: (app: App) => {
    app.component(_IconHashtag.name, _IconHashtag);
  }
});

export default IconHashtag;