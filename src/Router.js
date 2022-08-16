/** @format */
import React, { Suspense, lazy } from 'react';
import Header from './component/header/Header';


import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';

const Joke = lazy(() =>
	import('./component/joke/Joke')
);
const Home = lazy(() =>
	import('./component/home/Home')
);
const Dragon=lazy(() =>
import('./component/dragon/Dragon')
);
const Falcon=lazy(() =>
import('./component/falcon/Falcon')
);



const Routers = () => {
	return (
		<Router>
            <Header/>
			<Suspense  fallback={<>...</>}>
				<Routes>
					<Route exact path='joke' element={<Joke/>} />
					<Route exact path='home' element={<Home/>} />
					<Route exact path='dragon' element={<Dragon/>} />
					<Route exact path='falcon' element={<Falcon/>} />
                    <Route path="*" element={ <Navigate to="/home" /> }/>
				</Routes>
			</Suspense>
		</Router>
	);
};

export default Routers;
