(function() {
  'use strict';

  angular.module('app.states')
    .run(appRun);

  /** @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return {
      'services': {
        parent: 'application',
        url: '/service-explorer',
        redirectTo: 'services.explorer',
        template: '<ui-view></ui-view>',
      },
    };
  }
})();
