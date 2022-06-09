import { EXTERNAL_LINKS } from 'constants/links';
import React from 'react';
import styled from 'styled-components';
import { ExternalLink, Paragraph } from 'styles/common';
import { useTranslation } from 'react-i18next';

import TextLogo from 'assets/svg/brand/text-logo-white.svg';

const PoweredBySynthetix = () => {
	const { t } = useTranslation();
	return (
		<Container>
			<Text>{t('common.powered-by')}</Text>
			<ExternalLink href={EXTERNAL_LINKS.Synthetix.Home}>
				<TextLogo height="10.5px" />
			</ExternalLink>
		</Container>
	);
};

const Container = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-gap: 5px;
`;

const Text = styled(Paragraph)`
	font-size: 10px;
	color: ${(props) => props.theme.colors.common.primaryWhite};
	opacity: 0.5;
	letter-spacing: 0.04em;
	font-variant: small-caps;
	font-family: ${(props) => props.theme.fonts.regular};
	text-transform: uppercase;
	line-height: 100%;
	text-align: center;
`;

export default PoweredBySynthetix;
