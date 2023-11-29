import type { App } from 'vue';
import _IconWeixinPeopleNearby from './icon-weixin-people-nearby.vue';

const IconWeixinPeopleNearby = Object.assign(_IconWeixinPeopleNearby, {
  install: (app: App) => {
    app.component(_IconWeixinPeopleNearby.name, _IconWeixinPeopleNearby);
  }
});

export default IconWeixinPeopleNearby;