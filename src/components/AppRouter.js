import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts';



const AppRouter = () => {
    const user = false;
    return user ?
        (
            <Routes>
                {privateRoutes.map(({ path, element }) =>
                    <Route path={path} element={element} exact={true}/>
                )}
               <Route path="*" element={<Navigate replace to={CHAT_ROUTE} /> }/>
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({ path, element }) =>
                    <Route path={path} element={element} exact={true}/>
                )}
                <Route path="*" element={<Navigate replace to={LOGIN_ROUTE} />} />
            </Routes>
        )

}
export default AppRouter;