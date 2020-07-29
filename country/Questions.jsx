import React from 'react';
import {useIntl} from 'react-intl';

import Expandable from '../../../../components_next/StyleGuides/Expandable';

import './Questions.scss';

/**
 * Вопросы и ответы на странице "Любимая страна" (программа лояльности ЛК)
 * @component
 */
const Questions = () => {
	const intl = useIntl();

	return (
		<div id="questions-answers">
			<div className="header">
				{intl.formatMessage({id: 'loyalty.country.questions.header'})}
			</div>
			<Expandable
				summary={intl.formatMessage({id: 'loyalty.country.questions.about'})}
				details={intl.formatMessage({id: 'loyalty.country.answers.about'})}
			/>
			<Expandable
				summary={intl.formatMessage({id: 'loyalty.country.questions.countries'})}
				details={intl.formatMessage({id: 'loyalty.country.answers.countries'})}
			/>
			<Expandable
				summary={intl.formatMessage({id: 'loyalty.country.questions.membership'})}
				details={intl.formatMessage({id: 'loyalty.country.answers.membership'})}
			/>
			<Expandable
				summary={intl.formatMessage({id: 'loyalty.country.questions.products'})}
				details={intl.formatMessage({id: 'loyalty.country.answers.products'})}
			/>
			<Expandable
				summary={intl.formatMessage({id: 'loyalty.country.questions.application'})}
				details={intl.formatMessage({id: 'loyalty.country.answers.application'})}
			/>
			<Expandable
				summary={intl.formatMessage({id: 'loyalty.country.questions.change-details'})}
				details={intl.formatMessage({id: 'loyalty.country.answers.change-details'})}
			/>
			<Expandable
				summary={intl.formatMessage({id: 'loyalty.country.questions.cancel'})}
				details={intl.formatMessage({id: 'loyalty.country.answers.cancel'})}
			/>
			<Expandable
				summary={intl.formatMessage({id: 'loyalty.country.questions.term'})}
				details={intl.formatMessage({id: 'loyalty.country.answers.term'})}
			/>
			<Expandable
				summary={intl.formatMessage({id: 'loyalty.country.questions.change-country'})}
				details={intl.formatMessage({id: 'loyalty.country.answers.change-country'})}
			/>
			<Expandable
				summary={intl.formatMessage({id: 'loyalty.country.questions.discount-stack'})}
				details={intl.formatMessage({id: 'loyalty.country.answers.discount-stack'})}
			/>
			<Expandable
				summary={intl.formatMessage({id: 'loyalty.country.questions.discount-transfer'})}
				details={intl.formatMessage({id: 'loyalty.country.answers.discount-transfer'})}
			/>
			<Expandable
				summary={intl.formatMessage({id: 'loyalty.country.questions.not-work'})}
				details={intl.formatMessage({id: 'loyalty.country.answers.not-work'})}
			/>
			<Expandable
				summary={intl.formatMessage({id: 'loyalty.country.questions.not-found'})}
				details={intl.formatMessage({id: 'loyalty.country.answers.not-found'})}
			/>
		</div>
	);
};

Questions.propTypes = {};

Questions.defaultProps = {};

export default Questions;
