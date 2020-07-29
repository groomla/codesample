import React from 'react';
import {useIntl} from 'react-intl';
import {useDispatch} from 'react-redux';
import {Form} from 'react-final-form';
import {requestSaveDetails} from '../redux/actions';

import MyDetailsForm from './MyDetailsForm';
import formValidator from './formValidator';

import './MyDetails.scss';

/**
 * Раздел "Мои данные" для программы лояльности
 * @component
 */
const MyDetails = () => {
	const intl = useIntl();
	const dispatch = useDispatch();
	const validate = formValidator(intl);

	const save = values => dispatch(requestSaveDetails(values));
	const onSubmit = values => validate(values, true) || save(values);

	return (
		<Form
			onSubmit={onSubmit}
			render={MyDetailsForm}
			validate={validate}
			validateOnBlur
		/>
	);
};

MyDetails.propTypes = {};

MyDetails.defaultProps = {};

export default MyDetails;
