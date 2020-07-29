import React from 'react';
import PropTypes from 'prop-types';
import {useIntl, FormattedMessage} from 'react-intl';

import ButtonYellow from '../../../../components_next/StyleGuides/Buttons/ButtonYellow';

/**
 * Контент с ошибкой выполнения регистрации, для диалога регистрации нового участника (программа лояльности ЛК)
 * @component
 *
 * @param {function} onClose - коллбек для закрытия диалога
 */
const FailedContent = ({onClose}) => {
	const intl = useIntl();

	return (
		<div className="register-dialog-content-wrap">
			<div className="icon mail">
				<div className="image">
					<img src="/images-new/svg-icons/loyalty-icon-cloud.svg" alt="" />
				</div>
			</div>
			<div className="failed-message">
				{intl.formatMessage({id: 'somethingwrong'})}
			</div>
			<div className="sub-message">
				{intl.formatMessage({id: 'glerror.tryagainlater'})}
			</div>
			<ButtonYellow id="button-failed" onClick={onClose}>
				<FormattedMessage id="button.close" />
			</ButtonYellow>
		</div>
	);
};

FailedContent.propTypes = {
	onClose: PropTypes.func,
};

FailedContent.defaultProps = {
	onClose: () => {},
};

export default FailedContent;
