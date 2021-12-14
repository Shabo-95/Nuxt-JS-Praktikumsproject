import Vue from 'vue'

import LazyLoadDirective from '../directives/LazyLoadDirective'

Vue.config.productionTip = false

Vue.directive('lazyload', LazyLoadDirective)
