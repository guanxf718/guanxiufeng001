const TabBar = () =>
    import ('./tabBar/index.vue');
const ChoiceShop = () =>
    import ('./choiceShop/index.vue');
const AdCarousel = () =>
    import ('./adCarousel/index.vue');
const ProductQueue = () =>
    import ('./productQueue/index.vue');

module.exports = {
    TabBar,
    ChoiceShop,
    AdCarousel,
    ProductQueue
};