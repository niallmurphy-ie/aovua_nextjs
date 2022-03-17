import React from 'react';
import Head from 'next/head';
import PageTitle from '../../components/main/PageTitle';
import client from '../../lib/apolloClient';
import { ABOUT } from '../../lib/queries';
import CKContent from '../../components/utils/CKContent';
import WithTransition from '../../components/utils/WithTransition';

const AboutPage = ({ about }) => {
	return (
		<>
			<Head>
				<title>Giới thiệu | Ao Vua JSC.</title>
				<meta name="og:title" content="Giới thiệu | Ao Vua JSC." />
				<meta name="description" content="Giới thiệu của Ao Vua JSC." />
				{about.WideHeaderImage && (
					<meta
						property="og:image"
						content={`${process.env.NEXT_PUBLIC_STRAPI_URL}${about.WideHeaderImage.url}`}
					/>
				)}
			</Head>
			<WithTransition>
				<PageTitle
					pageTitle="Giới thiệu của Ao Vua JSC."
					breadcrumb={null}
					headerImage={about.WideHeaderImage?.url}
				/>
				<div className="container section-padding">
					<div className="row">
						<div className="col-md-8">
							<CKContent content={about.Body} />
						</div>
						<div className="col-md-4">
							<div className="card">
								<div className="card-body">
									<CKContent
										content={about.MissionStatement}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</WithTransition>
		</>
	);
};

export const getStaticProps = async () => {
	const aboutQuery = await client.query({
		query: ABOUT,
	});

	return {
		props: {
			about: aboutQuery.data.about,
		},
	};
};

export default AboutPage;
