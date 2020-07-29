import React from 'react';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

import MaskedField from '../../../../components_next/StyleGuides/MaskedField';
import ButtonYellow from '../../../../components_next/StyleGuides/Buttons/ButtonYellow';

/**
 * Форма для страницы "Мои данные" (программа лояльности ЛК)
 * @component
 *
 * @param {func} handleSubmit - коллбек сабмита формы
 */
const MyDetailsForm = ({handleSubmit}) => {
	const intl = useIntl();
	const {memberStatus} = useSelector(state => state.loyalty);
	const {fullName, phone, email} = memberStatus?.user || {};

	return (
		<form className="my-details-form" onSubmit={handleSubmit}>

			<div className="control">
				<div className="label">
					{intl.formatMessage({id: 'displayfor.fio'})}
				</div>
				<MaskedField
					name="fio"
					mask="any"
					value={fullName}
					label={intl.formatMessage({id: 'displayfor.fio'})}
					width="400px"
					margin="0 0 20px"
				/>
			</div>

			<div className="control">
				<div className="label">
					{intl.formatMessage({id: 'displayfor.phone'})}
				</div>
				<MaskedField
					name="phone"
					mask="phone"
					value={phone}
					label={intl.formatMessage({id: 'displayfor.phone'})}
					width="400px"
					margin="0 0 20px"
				/>
			</div>

			<div className="control">
				<div className="label">
					{intl.formatMessage({id: 'login.email'})}
				</div>
				<MaskedField
					name="email"
					mask="email"
					value={email}
					label={intl.formatMessage({id: 'login.email'})}
					width="400px"
					margin="0 0 20px"
				/>
			</div>

			<ButtonYellow type="submit">
				{intl.formatMessage({id: 'displayfor.save'})}
			</ButtonYellow>

		</form>
	);
};

MyDetailsForm.propTypes = {
	handleSubmit: PropTypes.func,
};

MyDetailsForm.defaultProps = {
	handleSubmit: () => {},
};

export default MyDetailsForm;
