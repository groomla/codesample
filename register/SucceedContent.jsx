import React from 'react';
import PropTypes from 'prop-types';
import {useIntl, FormattedMessage} from 'react-intl';

import ButtonYellow from '../../../../components_next/StyleGuides/Buttons/ButtonYellow';

/**
 * Контент с сообщением об успешной регистрации, для диалога регистрации нового участника (программа лояльности ЛК)
 * @component
 *
 * @param {object} country - выбранная в диалоге страна
 * @param {function} onClose - коллбек для закрытия диалога
 */
const SucceedContent = ({country, onClose}) => {
	const intl = useIntl();

	return (
		<div className="register-dialog-content-wrap">
			<div className="icon mail">
				<div className="image">
					<img src="/images-new/svg-icons/loyalty-icon-mail.svg" alt="" />
				</div>
			</div>
			<div className="succeed-message">
				{intl.formatMessage({id: 'loyalty.register.message.succeed'})}
			</div>
			<div className="sub-message">
				<span className="label">
					{intl.formatMessage({id: 'loyalty.register.country'})}
				</span>:
				<span className="value">
					{country.name}
				</span>
			</div>
			<ButtonYellow id="button-succeed" onClick={onClose}>
				<FormattedMessage id="loyalty.register.button.succeed" />
			</ButtonYellow>
		</div>
	);
};

SucceedContent.propTypes = {
	country: PropTypes.objectOf(PropTypes.shape),
	onClose: PropTypes.func,
};

SucceedContent.defaultProps = {
	country: {},
	onClose: () => {},
};

export default SucceedContent;
