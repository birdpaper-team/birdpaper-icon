import type { App } from 'vue';
import _IconLightMember from './icon-light-member.vue';

const IconLightMember = Object.assign(_IconLightMember, {
  install: (app: App) => {
    app.component(_IconLightMember.name, _IconLightMember);
  }
});

export default IconLightMember;