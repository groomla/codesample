import React from 'react';
import {useSelector} from 'react-redux';
import {useIntl} from 'react-intl';

import {LOYALTY_STATUS} from '../redux/constants';

import './Icons.scss';

/**
 * Иконки на странице "Любимая страна" (программа лояльности ЛК)
 * @component
 */
const Icons = () => {
	const intl = useIntl();
	const {memberStatus} = useSelector(state => state.loyalty);
	const {status} = memberStatus;

	if (status === LOYALTY_STATUS.MEMBER) {
		return null;
	}

	return (
		<div id="loyalty-country-icons">
			<div className="icon book">
				<div className="image">
					<img src="/images-new/svg-icons/loyalty-icon-travel.svg" alt="" />
				</div>
				{intl.formatMessage({id: 'loyalty.country.icons.book'})}
			</div>
			<div className="icon join">
				<div className="image">
					<img src="/images-new/svg-icons/loyalty-icon-heart.svg" alt="" />
				</div>
				{intl.formatMessage({id: 'loyalty.country.icons.join'})}
			</div>
			<div className="icon discount">
				<div className="image">
					<img src="/images-new/svg-icons/loyalty-icon-gift.svg" alt="" />
				</div>
				{intl.formatMessage({id: 'loyalty.country.icons.discount'})}
			</div>
		</div>
	);
};

Icons.propTypes = {};

Icons.defaultProps = {};

export default Icons;
