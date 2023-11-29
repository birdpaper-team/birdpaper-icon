import type { App } from 'vue';
import _IconBriefcase2Line from './icon-briefcase-2-line.vue';

const IconBriefcase2Line = Object.assign(_IconBriefcase2Line, {
  install: (app: App) => {
    app.component(_IconBriefcase2Line.name, _IconBriefcase2Line);
  }
});

export default IconBriefcase2Line;