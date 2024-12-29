import Home from "./pages/home/Home";
import User from "./pages/users/User";
import Main from "./pages/photowall/Main";
import AddPhoto from "./pages/photowall/AddPhoto";

const routesConfig = [
    {
        path : "/",
        component:<Home title='This is a title'/>, //sending it to props of the component
    },
    {
        path:"/user",
        component:<User/>,
    },
    {
        path:"/photowall/*",
        component:<Main/>,
    }

]

export default routesConfig;