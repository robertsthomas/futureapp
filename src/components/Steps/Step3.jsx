import React from 'react';

import { Form, Input, Row, Col, Button, Typography } from 'antd';

const Step3 = ({ nextStep, handleChange, values, form }) => {
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
				Part 3/3: Short Response Questions
			</Typography.Paragraph>
			<Form>
				<Form.Item
					label={
						<span style={{ color: 'lightgrey', fontSize: 13 }}>
							Why are you interested in software engineering?
						</span>
					}
					colon={false}
				>
					{getFieldDecorator('description', {
						rules: [
							{
								required: true,
								message: 'Description required'
							},
							{
								min: 80,
								message: 'Please enter a minimum of 80 characters'
							}
						]
					})(
						<Input.TextArea
							rows={10}
							style={{ borderStyle: 'solid', resize: 'none' }}
							placeholder="I'm interested in software engineering because I love building things. I've been interested in mathematics since I was a little kid and I think software brings together both mathematics and creativity in a beautiful way."
							onChange={(e) => handleChange('interest', e.target.value)}
						/>
					)}
				</Form.Item>
			</Form>
			<Button block={true} shape='round' onClick={saveAndContinue}>
				Finish
			</Button>
		</div>
	);
};

export default Form.create({ name: 'step3' })(Step3);
