routes.$inject = [
    '$locationProvider',
    '$stateProvider',
    '$urlRouterProvider'
];

export default function routes($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode({enabled:true, requireBase: false});

    $urlRouterProvider.rule(function($injector, $location) {
        let path = $location.path();
        if (path !== '/' && path.slice(-1) === '/') {
            $location.replace().path(path.slice(0, -1));
        }
    });


    $stateProvider
        .state('index', {
            url: '/',
            template: require('./views/main.template.html'),
            data: {
                permissions: {
                    except: 'Auth',
                    redirectTo: () => {
                        return {
                            state: 'dashboard'
                        }
                    }
                }
            }
        })
        .state('dashboard', {
            url: '/dashboard',
            template: require('./views/dashboard.template.html'),
            data: {
                permissions: {
                    only: 'Auth',
                    redirectTo: () => {
                        return {
                            state: 'index'
                        }
                    }
                }
            }
        })

    ;


    $urlRouterProvider.otherwise(function($injector, $location){
        let state = $injector.get('$state');
        state.go('404');
        return $location.path();
    });
}