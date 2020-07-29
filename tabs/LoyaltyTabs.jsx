import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {useParams} from 'react-router';

import LoyaltyTab from './LoyaltyTab';
import Order from '../../components/Order';
import OrderList from '../../components/OrderList';
import FavoriteCountry from '../country/FavoriteCountry';
import MyDetails from '../details/MyDetails';

import {LOYALTY_TABS, LOYALTY_ROUTES} from '../redux/constants';
import {requestMemberStatus, requestCountriesList} from '../redux/actions';
import {replaceUrl} from '../../../../utils';

import './LoyaltyTabs.scss';

/**
 * Вкладки для программы лояльности ЛК
 * @component
 *
 * @param {string} initialTab - наименование вкладки, которую открывать на старте
 */
const LoyaltyTabs = ({initialTab}) => {
	const [selected, setSelected] = useState(initialTab);
	const dispatch = useDispatch();
	const {orderId} = useParams();

	const onSelect = (selectedTab) => {
		setSelected(selectedTab);

		if (selectedTab === LOYALTY_TABS.COUNTRY) {
			replaceUrl({pathname: LOYALTY_ROUTES.COUNTRY});
		} else if (selectedTab === LOYALTY_TABS.DETAILS) {
			replaceUrl({pathname: LOYALTY_ROUTES.DETAILS});
		} else if (selectedTab === LOYALTY_TABS.ORDERS) {
			replaceUrl({pathname: LOYALTY_ROUTES.ORDERS});
		}
	};

	useEffect(() => {
		dispatch(requestMemberStatus());
		dispatch(requestCountriesList());
	}, [dispatch]);

	return (
		<>
			<div className="loyalty-tabs-wrap">
				<div className="loyalty-tabs">
					<LoyaltyTab
						type={LOYALTY_TABS.COUNTRY}
						active={selected === LOYALTY_TABS.COUNTRY}
						onSelect={onSelect}
						data-testid="favorite-country-tab"
					/>
					<LoyaltyTab
						type={LOYALTY_TABS.ORDERS}
						active={selected === LOYALTY_TABS.ORDERS}
						onSelect={onSelect}
						data-testid="my-orders-tab"
					/>
					<LoyaltyTab
						type={LOYALTY_TABS.DETAILS}
						active={selected === LOYALTY_TABS.DETAILS}
						onSelect={onSelect}
						data-testid="my-details-tab"
					/>
				</div>
			</div>
			{selected === LOYALTY_TABS.ORDERS && !!orderId
				? <Order />
				: null
			}
			{selected === LOYALTY_TABS.ORDERS && !orderId
				? <OrderList />
				: null
			}
			{selected === LOYALTY_TABS.COUNTRY ?
				<FavoriteCountry />
				: null
			}
			{selected === LOYALTY_TABS.DETAILS ?
				<MyDetails />
				: null
			}
		</>
	);
};

LoyaltyTabs.propTypes = {
	initialTab: PropTypes.string,
};

LoyaltyTabs.defaultProps = {
	initialTab: LOYALTY_TABS.COUNTRY,
};

export default LoyaltyTabs;
