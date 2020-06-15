import React from 'react';
import { render } from 'react-dom';

import 'antd/dist/antd.css';

import { Layout, Typography } from 'antd';

import {
	Route,
	Switch,
	Redirect,
	BrowserRouter as Router
} from 'react-router-dom';

import Onboarding from './pages/Onboarding';
import './style.css';

const routing = (
	<Layout>
		<Layout.Header style={{ position: 'fixed', width: '100%' }}>
			<Typography.Title type='secondary' level={2}>
				<Typography.Text style={{ color: 'cornflowerblue' }}>
					Future
				</Typography.Text>
				School
			</Typography.Title>
		</Layout.Header>

		<Layout.Content>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					minHeight: '100vh'
				}}
			>
				<Router>
					<Switch>
						<Route exact={true} path='/onboarding' component={Onboarding} />
						<Route
							exact={true}
							path='/'
							render={() => <Redirect to='onboarding' />}
						/>
					</Switch>
				</Router>
			</div>
		</Layout.Content>
	</Layout>
);

render(routing, document.getElementById('root'));
