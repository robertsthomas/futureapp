import React, { useState } from 'react';

import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';

import Success from './Steps/Success';

const Steps = () => {
	const [step, setStep] = useState(1);

	let values;

	const [userInfo, setUserInfo] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		college: '',
		company: '',
		experience: '',
		interest: ''
	});

	const nextStep = () => {
		setStep(step + 1);
		if (step >= 4) {
			setStep(1);
			console.log(userInfo);
		}
	};

	// const prevState = () => {
	//   setStep(step - 1);
	// };

	const handleChange = (input, value) => {
		setUserInfo({ ...userInfo, [input]: value });
	};

	return (
		<div>
			{(() => {
				switch (step) {
					case 1:
						const { firstName, lastName, email, phoneNumber } = userInfo;
						values = { firstName, lastName, email, phoneNumber };

						return (
							<Step1
								nextStep={nextStep}
								handleChange={handleChange}
								values={values}
							/>
						);

					case 2:
						const { college, company, experience } = userInfo;
						values = { college, company, experience };

						return (
							<Step2
								nextStep={nextStep}
								handleChange={handleChange}
								values={values}
							/>
						);

					case 3:
						const { interest } = userInfo;
						values = { interest };
						return (
							<Step3
								nextStep={nextStep}
								handleChange={handleChange}
								values={values}
							/>
						);

					default:
						if (step >= 3) {
							return <Success userInfo={userInfo} />;
						}
				}
			})()}
		</div>
	);
};

export default Steps;
