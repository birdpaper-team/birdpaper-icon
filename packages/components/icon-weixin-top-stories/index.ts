import type { App } from 'vue';
import _IconWeixinTopStories from './icon-weixin-top-stories.vue';

const IconWeixinTopStories = Object.assign(_IconWeixinTopStories, {
  install: (app: App) => {
    app.component(_IconWeixinTopStories.name, _IconWeixinTopStories);
  }
});

export default IconWeixinTopStories;