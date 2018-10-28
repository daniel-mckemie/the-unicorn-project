import HomePage from "views/customviews/Home.jsx";
import Login from "views/customviews/Login.jsx";
import Cart from "views/customviews/Cart.jsx";

import SignUp from "views/customviews/CreateAccount.jsx";
import SignUpThanks from "views/customviews/SignUpThanks.jsx";
import Menu from "views/customviews/Menu.jsx";
import Catering from "views/customviews/Catering.jsx";
import Checkout from "views/customviews/Checkout.jsx";
import Confirm from "views/customviews/Confirm.jsx";
import Profile from "views/customviews/Profile.jsx";


var indexRoutes = [
  { path: "/catering", name: "Catering", component: Catering },
  { path: "/checkout", name: "Checkout", component: Checkout },
  { path: "/confirm", name: "Confirm", component: Confirm },
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/signup", name: "SignUp", component: SignUp },
  { path: "/signup-thanks", name: "SignUpThanks", component: SignUpThanks },  { path: "/thank-you", name: "Confirm", component: Confirm },
    { path: "/login", name: "Login", component: Login },{ path: "/cart", name: "Cart", component: Cart },
      { path: "/menu", name: "Menu", component: Menu },
  { path: "/", name: "HomePage", component: HomePage }
];

export default indexRoutes;
