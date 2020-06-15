import React from 'react';

import { Form, Input, Button, Typography, Select } from 'antd';

const Step2 = ({ nextStep, handleChange, values, form }) => {
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

	const onHandleChange = (input, value) => (e) => {
		return handleChange(input, e.target.value || value);
	};

	return (
		<div>
			<Typography.Paragraph
				disabled={true}
				style={{ cursor: 'auto', fontSize: 16, textAlign: 'center' }}
			>
				Part 2/3: Experience Questions
			</Typography.Paragraph>
			<Form>
				<Input.Group>
					<Form.Item
						label={
							<span style={{ color: 'lightgrey' }}>
								{' '}
								Which college did you go to?
							</span>
						}
						colon={false}
					>
						{getFieldDecorator('college', {
							rules: [
								{
									required: true,
									message: 'College required'
								}
							]
						})(
							<Input
								onChange={onHandleChange('college')}
								placeholder='UC Irvine'
							/>
						)}
					</Form.Item>
					<Form.Item
						label={
							<span style={{ color: 'lightgrey' }}>
								What was the last company you worked at?
							</span>
						}
						colon={false}
					>
						{getFieldDecorator('company', {
							rules: [
								{
									required: true,
									message: 'Company required'
								}
							]
						})(
							<Input
								onChange={onHandleChange('company')}
								placeholder='Accenture'
							/>
						)}
					</Form.Item>
					<Form.Item
						label={
							<span style={{ color: 'lightgrey' }}>
								How many years of experience do you have?
							</span>
						}
						colon={false}
						style={{ marginBottom: 24 }}
					>
						{getFieldDecorator('experience', {
							rules: [
								{
									required: true,
									message: 'Experience required'
								}
							]
						})(
							<Select
								onChange={(value) => onHandleChange('experience', value)}
								placeholder='Select a range'
								style={{ width: '100%' }}
							>
								<Select.Option value='0-3'>0-3</Select.Option>
								<Select.Option value='3-5'>3-5</Select.Option>
								<Select.Option value='5+'>5+</Select.Option>
							</Select>
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

export default Form.create({ name: 'step2' })(Step2);
