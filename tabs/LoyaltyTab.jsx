import React from 'react';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';

import {LOYALTY_TABS} from '../redux/constants';

/**
 * Одна вкладка, для группы вкладок программы лояльности ЛК
 * @component
 * @param {string} type - тип вкладки (Ллюбимая страна / мои бронирования / мои данные)
 * @param {bool} active - если эта вкладка активна
 * @param {func} onSelect - коллбек для выбора вкладки пользователем
 */
const LoyaltyTab = ({type, active, onSelect}) => {
	const intl = useIntl();
	const className = `loyalty-tab ${active ? 'active' : ''}`;
	const onClick = () => onSelect(type);

	const message = {
		[LOYALTY_TABS.COUNTRY]: intl.formatMessage({id: 'loyalty.tab.country'}),
		[LOYALTY_TABS.ORDERS]: intl.formatMessage({id: 'loyalty.tab.orders'}),
		[LOYALTY_TABS.DETAILS]: intl.formatMessage({id: 'loyalty.tab.details'}),
	}[type];

	return (
		<div className={className} onClick={onClick}>
			{message}
		</div>
	);
};

LoyaltyTab.propTypes = {
	type: PropTypes.string,
	active: PropTypes.bool,
	onSelect: PropTypes.func,
};

LoyaltyTab.defaultProps = {
	type: 'orderList',
	active: false,
	onSelect: () => {},
};

export default LoyaltyTab;
