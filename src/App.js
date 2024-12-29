import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import routesConfig from './routesConfig';

function App() {
    return (
        <div>
            <div className="App">
                <Link to="/">Home</Link> |
                <Link to="/user">User</Link> |
                <Link to="/photowall">PhotoWall</Link>
                
            </div>
            <Routes>
                {
                    routesConfig.map((value, key) => {
                    return <Route
                        key={key}
                        path={value.path}
                        element={value.component}>
                    </Route>
                })}
            </Routes>
        </div>
    );
}

export default App;