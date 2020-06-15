import React from 'react';

import { Form, Input, Row, Col, Button, Typography } from 'antd';
import './styles.css';

const Step1 = ({ nextStep, handleChange, values, form }) => {
	const { getFieldDecorator } = form;

	const saveAndContinue = (e) => {
		form.validateFields((err) => {
			if (!err) {
				e.preventDefault();
				console.log(values);
				nextStep();
			}
		});
	};

	return (
		<div>
			<Typography.Paragraph
				disabled={true}
				style={{ cursor: 'auto', fontSize: 16, textAlign: 'center' }}
			>
				Part 1/3: Basic Questions
			</Typography.Paragraph>
			<Form>
				<Input.Group>
					<Row gutter={8}>
						<Col span={12}>
							<Form.Item
								label={<span style={{ color: 'lightgrey' }}>First Name</span>}
								colon={false}
							>
								{getFieldDecorator('fname', {
									rules: [
										{
											type: 'string',
											message: 'Enter first name.'
										},
										{
											required: true,
											message: 'First name required.'
										}
									]
								})(
									<Input
										onChange={(e) => handleChange('firstName', e.target.value)}
										placeholder='John'
									/>
								)}
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								label={<span style={{ color: 'lightgrey' }}>Last Name</span>}
								colon={false}
							>
								{getFieldDecorator('lname', {
									rules: [
										{
											type: 'string',
											message: 'Enter last name.'
										},
										{
											required: true,
											message: 'Last name required'
										}
									]
								})(
									<Input
										onChange={(e) => handleChange('lastName', e.target.value)}
										placeholder='Doe'
									/>
								)}
							</Form.Item>
						</Col>
					</Row>
					<Form.Item
						label={<span style={{ color: 'lightgrey' }}>Email</span>}
						colon={false}
					>
						{getFieldDecorator('email', {
							rules: [
								{
									type: 'email',
									message: 'Enter email.'
								},
								{
									required: true,
									message: 'Email required'
								}
							]
						})(
							<Input
								onChange={(e) => handleChange('email', e.target.value)}
								placeholder='example@email.com'
							/>
						)}
					</Form.Item>
					<Form.Item
						label={<span style={{ color: 'lightgrey' }}>Phone Number</span>}
						colon={false}
						style={{ marginBottom: 24 }}
					>
						{getFieldDecorator('phone', {
							rules: [
								{
									pattern: /^\d{3}-\d{3}-\d{4}$/,
									message: 'Must match format 012-345-6789'
								}
							]
						})(
							<Input
								onChange={(e) => handleChange('phoneNumber', e.target.value)}
								placeholder='1234567890'
							/>
						)}
					</Form.Item>
				</Input.Group>
			</Form>
			<Button block={true} shape='round' onClick={saveAndContinue}>
				Continue
			</Button>
		</div>
	);
};

export default Form.create({ name: 'step1' })(Step1);
