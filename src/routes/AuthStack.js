import {AUTH_ROUTES} from "./index";
import {Route} from "react-router-dom";

export const AuthStack = () => {
  return (
      <div>
          {AUTH_ROUTES.map(({component,path}) => (
              <Route key={path} element={component} path={path}/>
          ))}
      </div>
  )
}