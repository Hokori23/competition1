import Vue from 'vue';
import {
  PullRefresh
} from 'vant';

import {
  Pagination
} from 'vant';

import {
  Uploader
} from 'vant';

Vue.use(Uploader);
Vue.use(Pagination);
Vue.use(PullRefresh);





import {
  Locale
} from 'vant';

import enUS from 'vant/lib/locale/lang/en-us';
import zhCN from 'vant/lib/locale/lang/zh-CN';
let lang = localStorage.getItem('language') || 'zh';

if (lang === 'zh') {
  Locale.use('zh-cn', zhCN);
} else {
  Locale.use('en-us', enUS);
}
