import React, { useState, useEffect } from 'react';
import { Row, Col, Typography, Spin } from 'antd';

const Success = ({ userInfo }) => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<Row
			type='flex'
			justify='center'
			align='middle'
			style={{ height: 'calc(100% - 180px)' }}
		>
			<Col span={12} style={{ textAlign: 'center' }}>
				{loading ? (
					<Spin size='large' />
				) : (
					<Typography.Title style={{ color: 'cornflowerblue' }} level={2}>
						All Done,{' '}
						<span style={{ textTransform: 'capitalize' }}>
							{userInfo.firstName}
						</span>
						!
					</Typography.Title>
				)}
			</Col>
		</Row>
	);
};

export default Success;
