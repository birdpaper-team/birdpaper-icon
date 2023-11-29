import type { App } from 'vue';
import _IconFriendsCircle from './icon-friends-circle.vue';

const IconFriendsCircle = Object.assign(_IconFriendsCircle, {
  install: (app: App) => {
    app.component(_IconFriendsCircle.name, _IconFriendsCircle);
  }
});

export default IconFriendsCircle;