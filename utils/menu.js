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
				title: 'Giới thiệu',
				link: '/gioi-thieu/ve-cong-ty',
				subMenu: null,
			},
			{
				title: 'Địa điểm',
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
			{
				title: 'Tin tức',
				link: '/tin-tuc-tong-hop',
				subMenu: null,
			},
		],
		contact: {
			phone: '0968-910-998',
			email: 'aovuajsc@gmail.com',
		},
	};
};
