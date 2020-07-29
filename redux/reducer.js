import {LOYALTY_ACTIONS} from './constants';

const initialState = {
	memberStatus: {},
	countriesList: [],
};

const loyaltyReducer = (state = initialState, action) => {
	const {type, payload, response} = action;

	switch (type) {
		case LOYALTY_ACTIONS.MEMBER_STATUS_REQUESTED:
			return {
				...state,
			};
		case LOYALTY_ACTIONS.MEMBER_STATUS_SUCCEED:
			return {
				...state,
				memberStatus: payload,
			};
		case LOYALTY_ACTIONS.MEMBER_STATUS_FAILED:
			return {
				...state,
				memberStatus: {fail: response},
			};
		case LOYALTY_ACTIONS.COUNTRIES_LIST_REQUESTED:
			return {
				...state,
			};
		case LOYALTY_ACTIONS.COUNTRIES_LIST_SUCCEED:
			return {
				...state,
				countriesList: payload,
			};
		case LOYALTY_ACTIONS.COUNTRIES_LIST_FAILED:
			return {
				...state,
				countriesList: {fail: response},
			};
		case LOYALTY_ACTIONS.APPLY_COUNTRY_REQUESTED:
			return {
				...state,
			};
		case LOYALTY_ACTIONS.APPLY_COUNTRY_SUCCEED:
			return {
				...state,
				applyCountry: payload,
			};
		case LOYALTY_ACTIONS.APPLY_COUNTRY_FAILED:
			return {
				...state,
				applyCountry: {fail: response},
			};
		case LOYALTY_ACTIONS.SAVE_DETAILS_REQUESTED:
			return {
				...state,
			};
		case LOYALTY_ACTIONS.SAVE_DETAILS_SUCCEED:
			return {
				...state,
			};
		case LOYALTY_ACTIONS.SAVE_DETAILS_FAILED:
			return {
				...state,
				saveDetails: {fail: response},
			};
		default:
			return {
				...state,
			};
	}
};

export default loyaltyReducer;
