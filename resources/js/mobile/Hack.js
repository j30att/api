hack.$inject = ['$templateCache'];
let menu_footer = require('./views/menu-footer.tpl.html');
let bid_place = require('./views/bid-place.tpl.html');
export default function hack($templateCache) {
    $templateCache.put('tpl/view/footer.template.html', menu_footer);
    $templateCache.put('tpl/view/bid-place.template.html', bid_place);
}
