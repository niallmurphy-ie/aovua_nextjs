export const VietnameseMenu = () => {
	return {
		title: 'Menu',
		components: [
			{
				title: 'Trang chủ',
				link: '/',
				subMenu: null,
			},
			{
				title: 'Địa Điểm',
				link: '/locations',
				subMenu: [
					{
						title: 'Khu du lịch Ao Vua',
						link: '/ao-vua-xanh',
					},
				],
			},
		],
		contact: {
			phone: '0968-910-998',
			email: 'aovuajsc@gmail.com',
		},
	};
};
