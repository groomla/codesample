import React from 'react';
import {useSelector} from 'react-redux';
import {FormattedMessage, useIntl} from 'react-intl';
import PropTypes from 'prop-types';

import ButtonYellow from '../../../../components_next/StyleGuides/Buttons/ButtonYellow';

import {LOYALTY_STATUS} from '../redux/constants';

import './Title.scss';

/**
 * Заголовок на странице "Любимая страна" (программа лояльности ЛК)
 * @component
 *
 * @param {function} onDialog - коллбек открытия диалога
 */
const Title = ({onDialog}) => {
	const intl = useIntl();
	const {memberStatus} = useSelector(state => state.loyalty);
	const {status, country, expirationDate} = memberStatus;

	/** Если даннные запроса еще не пришли */
	if (!status) {
		return null;
	}

	/** Пора выбрать страну */
	if (status === LOYALTY_STATUS.NOT_MEMBER) {
		return (
			<div id="loyalty-country-title">
				<div className="header">
					{intl.formatMessage({id: 'loyalty.country.title.join.header'})}
				</div>
				<div className="sub-header">
					{intl.formatMessage({id: 'loyalty.country.title.join.sub-header'})}
				</div>
				<ButtonYellow id="button-join" onClick={onDialog}>
					<FormattedMessage id="loyalty.country.title.join.button" />
				</ButtonYellow>
			</div>
		);
	}

	/** Пора забронировать тур */
	if (status === LOYALTY_STATUS.POSSIBLE_MEMBER) {
		return (
			<div id="loyalty-country-title">
				<div className="header">
					{intl.formatMessage({id: 'loyalty.country.title.book.header'})}
				</div>
				<div className="sub-header">
					{intl.formatMessage({id: 'loyalty.country.title.join.sub-header'})}
				</div>
			</div>
		);
	}

	/** Вы участвуете в программе лояльности */
	return (
		<div id="loyalty-country-title">
			<div className="header2">
				{intl.formatMessage({id: 'loyalty.country.title.neutral.header'})}
			</div>
			<div className="country-label">
				{intl.formatMessage({id: 'loyalty.tab.country'})}
			</div>
			<div className="country-name">
				{country.name}
			</div>
			<div className="sub-header">
				{intl.formatMessage({id: 'loyalty.country.title.neutral.sub-header'})}
				&nbsp;
				{intl.formatDate(expirationDate)}
			</div>
		</div>
	);
};

Title.propTypes = {
	onDialog: PropTypes.func,
};

Title.defaultProps = {
	onDialog: () => {},
};

export default Title;
