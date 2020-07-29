import React from 'react';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';

import Dialog from '../../../../components_next/StyleGuides/Dialog';
import RegisterContent from './RegisterContent';
import SucceedContent from './SucceedContent';
import FailedContent from './FailedContent';

import {REGISTER_DIALOG_TYPE} from '../redux/constants';

import './RegisterDialog.scss';

/**
 * Диалог регистрации нового участника (программа лояльности ЛК)
 * @component
 *
 * @param {bool} open - диалог открыт/закрыт
 * @param {number} type - тип контента диалога
 * @param {func} onCountry - коллбек выбора страны
 * @param {func} onConfirm - коллбек подтверждения регистрации
 * @param {func} onClose - коллбек закрытия диалога
 */
const RegisterDialog = ({open,type, onCountry, onConfirm, onClose}) => {
	const intl = useIntl();

	return (
		<Dialog
			title={intl.formatMessage({id: 'loyalty.register.dialog.title'})}
			open={open}
			onClose={onClose}
		>
			<>
				{type === REGISTER_DIALOG_TYPE.REGISTER &&
					<RegisterContent onCountry={onCountry} onConfirm={onConfirm} />
				}
				{type === REGISTER_DIALOG_TYPE.SUCCEED &&
					<SucceedContent onClose={onClose} />
				}
				{type === REGISTER_DIALOG_TYPE.FAILED &&
					<FailedContent onClose={onClose} />
				}
			</>
		</Dialog>
	);
};

RegisterDialog.propTypes = {
	open: PropTypes.bool,
	type: PropTypes.number,
	onCountry: PropTypes.func,
	onConfirm: PropTypes.func,
	onClose: PropTypes.func,
};

RegisterDialog.defaultProps = {
	open: false,
	type: 0,
	onCountry: () => {},
	onConfirm: () => {},
	onClose: () => {},
};

export default RegisterDialog;
