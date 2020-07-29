import {all, put, call, takeLatest} from 'redux-saga/effects';
import {LOYALTY_ACTIONS} from './constants';
import LoyaltyService from './service';

function* requestMemberStatus(action) {
	try {
		const {payload} = action;
		const {status, data} = yield call(LoyaltyService.requestMemberStatus, payload);

		if (status === 200) {
			yield put({type: LOYALTY_ACTIONS.MEMBER_STATUS_SUCCEED, payload: data});
		}
	} catch (e) {
		yield put({type: LOYALTY_ACTIONS.MEMBER_STATUS_FAILED, response: e});
	}
}

function* requestCountriesList(action) {
	try {
		const {payload} = action;
		const {status, data} = yield call(LoyaltyService.requestCountriesList, payload);

		if (status === 200) {
			yield put({type: LOYALTY_ACTIONS.COUNTRIES_LIST_SUCCEED, payload: data.countries});
		}
	} catch (e) {
		yield put({type: LOYALTY_ACTIONS.COUNTRIES_LIST_FAILED, response: e});
	}
}

function* requestApplyCountry(action) {
	try {
		const {payload} = action;
		const {status, data} = yield call(LoyaltyService.requestApplyCountry, payload);

		if (status === 200) {
			yield put({type: LOYALTY_ACTIONS.APPLY_COUNTRY_SUCCEED, payload: data});
		}
	} catch (e) {
		yield put({type: LOYALTY_ACTIONS.APPLY_COUNTRY_FAILED, response: e});
	}
}

function* requestSaveDetails(action) {
	try {
		const {payload} = action;
		const {status, data} = yield call(LoyaltyService.requestSaveDetails, payload);

		if (status === 200) {
			yield put({type: LOYALTY_ACTIONS.SAVE_DETAILS_SUCCEED, payload: data});
		}
	} catch (e) {
		yield put({type: LOYALTY_ACTIONS.SAVE_DETAILS_FAILED, response: e});
	}
}

function* loyaltySaga() {
	yield all([
		takeLatest(LOYALTY_ACTIONS.MEMBER_STATUS_REQUESTED, requestMemberStatus),
		takeLatest(LOYALTY_ACTIONS.COUNTRIES_LIST_REQUESTED, requestCountriesList),
		takeLatest(LOYALTY_ACTIONS.APPLY_COUNTRY_REQUESTED, requestApplyCountry),
		takeLatest(LOYALTY_ACTIONS.APPLY_COUNTRY_SUCCEED, requestMemberStatus),
		takeLatest(LOYALTY_ACTIONS.SAVE_DETAILS_REQUESTED, requestSaveDetails),
	]);
}

export default loyaltySaga;

