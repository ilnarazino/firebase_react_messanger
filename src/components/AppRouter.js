import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { LOGIN_ROUTE } from '../utils/consts';



const AppRouter = () => {
    const user = true;
    return user ?
        (
            <Routes>
                {privateRoutes.map(({ path, element }) =>
                    <Route path={path} element={element} exact={true}/>
                )}
               <Route path="*" element={<Navigate replace to="/chat" /> }/>
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({ path, element }) =>
                    <Route path={path} element={element} exact={true}/>
                )}
                <Route path="*" element={LOGIN_ROUTE} />
            </Routes>
        )

}
export default AppRouter;