import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useIntl, FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

import MaskedField from '../../../../components_next/StyleGuides/MaskedField';
import SelectField from '../../../../components_next/StyleGuides/SelectField';
import ButtonYellow from '../../../../components_next/StyleGuides/Buttons/ButtonYellow';
import Agreement from '../../../../components_next/StyleGuides/Agreement';

/**
 * Основной контент для диалога регистрации нового участника (программа лояльности ЛК)
 * @component
 *
 * @param {func} onCountry - коллбек выбора страны
 * @param {func} onConfirm - коллбек кнопки подтверждения
 */
const RegisterContent = ({onCountry, onConfirm}) => {
	const intl = useIntl();
	const {memberStatus, countriesList} = useSelector(state => state.loyalty);
	const {fullName, phone, email, birthDate} = memberStatus.user;
	const countries = countriesList.map(country => ({id: country.code, name: country.name}));

	const [agree, setAgree] = useState(true);

	return (
		<div className="register-dialog-content-wrap">
			<MaskedField
				label={intl.formatMessage({id: 'displayfor.fio'})}
				value={fullName}
				margin="0 0 20px"
				readOnly
			/>
			<MaskedField
				label={intl.formatMessage({id: 'offices.phone'})}
				value={phone}
				mask="phone"
				margin="0 20px 20px 0"
				width="273px"
				readOnly
			/>
			<MaskedField
				label={intl.formatMessage({id: 'login.email'})}
				value={email}
				mask="email"
				margin="0 0 20px"
				width="277px"
				readOnly
			/>
			<MaskedField
				label={intl.formatMessage({id: 'login.birthday'})}
				value={intl.formatDate(birthDate)}
				mask="date"
				margin="0 20px 20px 0"
				width="273px"
				readOnly
			/>
			<SelectField
				label={intl.formatMessage({id: 'loyalty.register.choose-country'})}
				value={memberStatus.country.code || countries[0].id}
				list={countries}
				margin="0 0 20px"
				width="277px"
				onChange={onCountry}
			/>
			<Agreement check onChange={setAgree}>
				<FormattedMessage
					id="loyalty.register.agreement"
					values={{
						policylink: text => <a href="https://www.tui.ru/privacy-policy/" target="_blank">{text}</a>,
						ruleslink: text => <a href="https://www.tui.ru/favorite_country_rules/" target="_blank">{text}</a>,
					}}
				/>
			</Agreement>
			<ButtonYellow id="button-register" disabled={!agree} onClick={onConfirm}>
				{intl.formatMessage({id: 'loyalty.register.button.confirm'})}
			</ButtonYellow>
		</div>
	);
};

RegisterContent.propTypes = {
	onCountry: PropTypes.func,
	onConfirm: PropTypes.func,
};

RegisterContent.defaultProps = {
	onCountry: () => {},
	onConfirm: () => {},
};

export default RegisterContent;
