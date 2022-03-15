import React, { Fragment, useState } from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { FaFacebookMessenger } from 'react-icons/fa';
import Select from 'react-select';
import { FadeInWhenVisible } from '../../components/utils/Animations';

const FacebookMessenger = () => {
	const options = [
		{
			value: 'Ao Vua',
			label: (
				<Fragment>
					<FaFacebookMessenger /> Ao Vua
				</Fragment>
			),
			pageID: '751126184998127',
			color: '#1c4c25',
		},
		{
			value: 'Đảo Ngọc Xanh',
			label: (
				<Fragment>
					<FaFacebookMessenger /> Đảo Ngọc Xanh
				</Fragment>
			),
			pageID: '1608577759385364',
			color: '#f4b800',
		},
	];
	const [selectedOption, setSelectedOption] = useState(options[0]);

	return (
		<>
			{/* <FadeInWhenVisible initialScale={0.9} delay={2}> */}
			<div className="messenger-choice">
				<MessengerSelect
					selectedOption={selectedOption}
					setSelectedOption={setSelectedOption}
					options={options}
				/>
			</div>
			{/* </FadeInWhenVisible> */}
			<MessengerCustomerChat
				pageId={selectedOption.pageID}
				appId=""
				htmlRef="https://aovua.niallmurphy.dev"
				themeColor={selectedOption.color}
				greetingDialogDisplay="fade"
				// loggedInGreeting="loggedInGreeting"
				// loggedOutGreeting="loggedOutGreeting"
				language="vi_VN"
				// Opened
			/>

			<div className="fb-loader"></div>
		</>
	);
};

const MessengerSelect = ({ selectedOption, setSelectedOption, options }) => {
	const customStyles = {
		control: (provided, state) => ({
			...provided,
			textAlign: 'center',
		}),
		option: (provided, state) => ({
			...provided,
			textAlign: 'center',
			backgroundColor: state.isSelected ? '#00d690' : '#fff',
			fontSize: '15px',
		}),
		menu: (provided, state) => ({
			...provided,
			top: 'auto',
			bottom: '100%',
		}),

		singleValue: (provided, state) => {
			const opacity = state.isDisabled ? 0.5 : 1;
			const transition = 'opacity 300ms';

			return { ...provided, opacity, transition };
		},
	};

	// .Select-menu-outer {
	// 	top: auto;
	// 	bottom: 100%;
	// }

	return (
		<Select
			defaultValue={selectedOption}
			onChange={setSelectedOption}
			options={options}
			styles={customStyles}
			isSearchable={false}
		/>
	);
};
export default FacebookMessenger;
