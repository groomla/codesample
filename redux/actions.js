import {LOYALTY_ACTIONS} from './constants';

export const requestMemberStatus = (payload) => ({
	type: LOYALTY_ACTIONS.MEMBER_STATUS_REQUESTED,
	payload,
});

export const requestCountriesList = (payload) => ({
	type: LOYALTY_ACTIONS.COUNTRIES_LIST_REQUESTED,
	payload,
});

export const requestApplyCountry = (payload) => ({
	type: LOYALTY_ACTIONS.APPLY_COUNTRY_REQUESTED,
	payload,
});

export const requestSaveDetails = (payload) => ({
	type: LOYALTY_ACTIONS.SAVE_DETAILS_REQUESTED,
	payload,
});
