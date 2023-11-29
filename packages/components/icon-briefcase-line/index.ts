import type { App } from 'vue';
import _IconBriefcaseLine from './icon-briefcase-line.vue';

const IconBriefcaseLine = Object.assign(_IconBriefcaseLine, {
  install: (app: App) => {
    app.component(_IconBriefcaseLine.name, _IconBriefcaseLine);
  }
});

export default IconBriefcaseLine;