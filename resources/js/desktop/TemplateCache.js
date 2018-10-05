function templateCache($templateCache) {
    $templateCache.put('view/menu.template.html', require('./Components/main-menu/main-menu.template.html'));
}

templateCache.$inject = ['$templateCache'];

export default templateCache