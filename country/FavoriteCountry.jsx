import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Banner from './Banner';
import Icons from './Icons';
import Title from './Title';
import Questions from './Questions';
import RegisterDialog from '../register/RegisterDialog';

import {REGISTER_DIALOG_TYPE} from '../redux/constants';

import {requestApplyCountry} from '../redux/actions';

import './FavoriteCountry.scss';

/**
 * Страница "Любимая страна" (программа лояльности ЛК)
 * @component
 */
const FavoriteCountry = () => {
	const dispatch = useDispatch();
	const {countriesList, applyCountry} = useSelector(state => state.loyalty);
	const [openDialog, setOpenDialog] = useState(false);
	const [country, setCountry] = useState();

	const onOpenDialog = () => setOpenDialog(true);
	const onCloseDialog = () => setOpenDialog(false);

	const onChangeCountry = id => setCountry(id);

	const onConfirmRegister = () => {
		const countryCode = country ?? countriesList[0].code;
		dispatch(requestApplyCountry({countryCode}));
	};

	let dialogType;
	if (!applyCountry) {
		dialogType = REGISTER_DIALOG_TYPE.REGISTER;
	} else if (!applyCountry.fail) {
		dialogType = REGISTER_DIALOG_TYPE.SUCCEED;
	} else {
		dialogType = REGISTER_DIALOG_TYPE.FAILED;
	}

	return (
		<>
			<Banner />
			<Icons />
			<Title onDialog={onOpenDialog} />
			<Questions />
			<RegisterDialog
				open={openDialog}
				type={dialogType}
				onCountry={onChangeCountry}
				onConfirm={onConfirmRegister}
				onClose={onCloseDialog}
			/>
		</>
	);
};

FavoriteCountry.propTypes = {};

FavoriteCountry.defaultProps = {};

export default FavoriteCountry;
