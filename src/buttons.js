import { GiCauldron, GiTwoCoins } from "react-icons/gi";
import {RxMagicWand} from "react-icons/rx";

const buttons = [
    {
        name: "Nouvelle commande",
        icon: <GiCauldron/>,
        bgColor: "#7f7f9e",
        action: "new"
    },
    {
        name: "Commandes en cours",
        icon: <RxMagicWand/>,
        bgColor: "#cf3939",
        action: "orders"
    },
    {
        name: "Paiement de commande",
        icon: <GiTwoCoins/>,
        bgColor: "#6ecca3",
        action: "payment-order"
    }
];

export default buttons;