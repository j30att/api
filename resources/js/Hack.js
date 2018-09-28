hack.$inject = ['$templateCache'];
let menu_footer = require('./views/menu-footer.tpl.html');
export default function hack($templateCache) {
    $templateCache.put('tpl /view/footer.template.html', menu_footer);
}