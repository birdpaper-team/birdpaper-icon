import type { App } from 'vue';
import _IconLinkCloud from './icon-link-cloud.vue';

const IconLinkCloud = Object.assign(_IconLinkCloud, {
  install: (app: App) => {
    app.component(_IconLinkCloud.name, _IconLinkCloud);
  }
});

export default IconLinkCloud;