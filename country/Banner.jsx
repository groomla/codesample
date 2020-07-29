import React from 'react';
import {useIntl} from 'react-intl';

import './Banner.scss';

/**
 * Баннер на странице "Любимая страна" (программа лояльности ЛК)
 * @component
 */
const Banner = () => {
	const intl = useIntl();

	return (
		<div id="banner-loyalty-2">
			<div className="text1">
				{intl.formatMessage({id: 'loyalty.country.banner.text1'})}
			</div>
			<div className="text2">
				{intl.formatMessage({id: 'loyalty.country.banner.text2'})}
			</div>
			<div className="text3">
				{intl.formatMessage({id: 'loyalty.country.banner.text3'})}
			</div>
		</div>
	);
};

Banner.propTypes = {};

Banner.defaultProps = {};

export default Banner;
