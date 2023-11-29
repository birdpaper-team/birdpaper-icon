import type { App } from 'vue';
import _IconCalendarThree from './icon-calendar-three.vue';

const IconCalendarThree = Object.assign(_IconCalendarThree, {
  install: (app: App) => {
    app.component(_IconCalendarThree.name, _IconCalendarThree);
  }
});

export default IconCalendarThree;