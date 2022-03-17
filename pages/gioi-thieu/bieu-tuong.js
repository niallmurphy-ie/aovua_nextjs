import React from 'react';
import Head from 'next/head';
import PageTitle from '../../components/main/PageTitle';
import CKContent from '../../components/utils/CKContent';
import WithTransition from '../../components/utils/WithTransition';
import Image from 'next/image';

const AboutPage = ({ about }) => {
	return (
		<>
			<Head>
				<title>Biểu tượng | Ao Vua JSC.</title>
				<meta name="og:title" content="Biểu tượng | Ao Vua JSC." />
				<meta name="description" content="Biểu tượng của Ao Vua JSC." />
			</Head>
			<WithTransition>
				<PageTitle
					pageTitle="Biểu tượng của Ao Vua JSC."
					breadcrumb={null}
				/>
				<div className="container section-padding">
					<div className="row">
						<div className="col-md-12">
							<Image
								src="/images/logo.png"
								width={180}
								height={132}
								objectFit="cover"
								alt="Ao Vua Logo"
							/>
						</div>
					</div>
				</div>
			</WithTransition>
		</>
	);
};

export default AboutPage;
