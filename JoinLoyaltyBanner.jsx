import React from 'react';
import {useSelector} from 'react-redux';
import {FormattedMessage, useIntl} from 'react-intl';

import ButtonYellow from '../../../components_next/StyleGuides/Buttons/ButtonYellow';

import {LOYALTY_STATUS} from './redux/constants';

import './JoinLoyaltyBanner.scss';

/**
 * Рекламный баннер программы лояльности, для раздела бронирований в ЛК
 * @component
 */
const JoinLoyaltyBanner = () => {
	const intl = useIntl();
	const {memberStatus} = useSelector(state => state.loyalty);
	const {status} = memberStatus;

	if (status !== LOYALTY_STATUS.NOT_MEMBER) {
		return null;
	}

	return (
		<div id="banner-loyalty-1">
			<div className="banner-text-1">
				{intl.formatMessage({id: 'loyalty.orders.banner.text1'})}
			</div>
			<div className="banner-text-2">
				{intl.formatMessage({id: 'loyalty.orders.banner.text2'})}
			</div>
			<ButtonYellow id="join-loyalty-button" onClick={() => {}}>
				{intl.formatMessage({id: 'loyalty.orders.banner.button'})}
			</ButtonYellow>
		</div>
	);
};

export default JoinLoyaltyBanner;
