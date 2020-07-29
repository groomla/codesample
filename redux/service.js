import CONFIG from 'config';
import {tuiApiInstance} from '../../../../Services/api';

/**
 * Сервис данных для программы лояльности
 */
class LoyaltyServiceClass {
	requestMemberStatus = () => tuiApiInstance({baseURL: CONFIG.apiGateUrl})
		.get('/api/loyalty/member/status');

	requestCountriesList = () => tuiApiInstance({baseURL: CONFIG.apiGateUrl})
		.get('/api/loyalty/countries');

	requestApplyCountry = ({countryCode}) => tuiApiInstance({baseURL: CONFIG.apiGateUrl})
		.post('/api/loyalty/apply-country', {country: {code: countryCode}});

	requestSaveDetails = ({fio, phone, email}) => {
		tuiApiInstance({baseURL: CONFIG.apiGateUrl})
			.post('/api/account/update', {fullName: fio});
		tuiApiInstance({baseURL: CONFIG.apiGateUrl})
			.post('/api/account/change-phone', {phone});
		tuiApiInstance({baseURL: CONFIG.apiGateUrl})
			.post('/api/account/change-email', {email});
	}
}

export default new LoyaltyServiceClass();
