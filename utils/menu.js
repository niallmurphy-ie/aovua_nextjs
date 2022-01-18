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
				link: '/diadiem',
				subMenu: [
					{
						title: 'Khu du lịch Ao Vua',
						link: '/ao-vua-xanh/',
					},
					{
						title: 'Khu du lịch Đảo Ngọc Xanh',
						link: '/dao-ngoc-xanh/',
					},
					{
						title: 'Khu du lịch Đầm Long',
						link: '/dam-long/',
					},
					{
						title: 'Công viên Vĩnh Hằng',
						link: '/cong-vien-vinh-hang/',
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
