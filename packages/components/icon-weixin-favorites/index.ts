import type { App } from 'vue';
import _IconWeixinFavorites from './icon-weixin-favorites.vue';

const IconWeixinFavorites = Object.assign(_IconWeixinFavorites, {
  install: (app: App) => {
    app.component(_IconWeixinFavorites.name, _IconWeixinFavorites);
  }
});

export default IconWeixinFavorites;