import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';




const AppRouter = () => {
    const user = false;
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
                <Route path="*" element={<Navigate replace to="/login" /> } />
            </Routes>
        )

}
export default AppRouter;