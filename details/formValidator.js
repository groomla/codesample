import PropTypes from 'prop-types';
import {FORM_VALIDATION} from '../redux/constants';

const {phoneRegex, emailRegex} = FORM_VALIDATION;

/**
 * Валидатор формы, для раздела "Мои данные" программы лояльности
 * @function
 *
 * @param {object} values - переданные в валидатор значения
 * @param {bool} submit - признак валидации при сабмите формы
 */
const formValidator = intl => (values, submit) => {
	let hasErrors = false;
	const errors = {};

	/** При инициализации формы в валидатор почему-то приходит пустой объект */
	if (!submit && !Object.keys(values).length) {
		return null;
	}

	/** Проверка поля FIO */
	if (!values.fio) {
		hasErrors = true;
		errors.fio = intl.formatMessage({id: 'validation.required'});
	}

	/** Проверка поля PHONE */
	if (!values.phone) {
		hasErrors = true;
		errors.phone = intl.formatMessage({id: 'validation.required'});
	} else if (values.phone.replace(phoneRegex, '').length < 8) {
		hasErrors = true;
		errors.phone = intl.formatMessage({id: 'validation.phone'});
	}

	/** Проверка поля EMAIL */
	if (!values.email) {
		hasErrors = true;
		errors.email = intl.formatMessage({id: 'validation.required'});
	} else if (submit && !emailRegex.test(values.email)) {
		hasErrors = true;
		errors.email = intl.formatMessage({id: 'validation.email'});
	}

	return hasErrors && errors;
};


formValidator.propTypes = {
	intl: PropTypes.shape(),
	values: PropTypes.shape(),
	submit: PropTypes.bool,
};

formValidator.defaultProps = {
	intl: {},
	values: {},
	submit: () => {},
};

export default formValidator;
