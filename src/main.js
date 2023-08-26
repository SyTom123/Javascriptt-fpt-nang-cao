// eslint-disable-next-line import/no-extraneous-dependencies
import Navigo from "navigo";

const router = new Navigo("/", { linksSelector: "a" });
router.on({
    "/": () => console.log("Homepage"),
    "/about": () => console.log("AboutPage"),
    "/product": () => console.log("ProductPage"),
});
router.resolve();