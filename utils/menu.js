export const AoVuaMenu = () => {
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
				link: null,
				subMenu: [
					{
						title: 'Khu du lịch Ao Vua',
						link: '/ao-vua-xanh/',
					},
					{
						title: 'Trung Tâm Chăm Sóc Sức Khỏe Ao Vua',
						link: '/trung-tam-cham-soc-suc-khoe-ao-vua',
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
				title: 'Sản phẩm',
				link: '/san-pham/ngu-coc-thuc-duong',
				subMenu: null,
			},
			{
				title: 'Tin tức',
				link: null,
				subMenu: [
					{
						title: 'Tất cả tin tức',
						link: '/tin-tuc-tong-hop',
					},
					{
						title: 'Tin nổi bật',
						link: '/tin-tuc-tong-hop/khong-phan-loai',
					},
					{
						title: 'Các Hoạt Động Của Công Ty',
						link: '/tin-tuc-tong-hop/hoat-dong-cua-cong-ty',
					},
					{
						title: 'Doanh Nhân',
						link: '/tin-tuc-tong-hop/doanh-nhan',
					},
					{
						title: 'HĐ. Từ Thiện',
						link: '/tin-tuc-tong-hop/hd-tu-thien',
					},
					{
						title: 'Thành Tích',
						link: '/tin-tuc-tong-hop/thanh-tich',
					},
					{
						title: 'Tin Tức Du Lịch',
						link: '/tin-tuc-tong-hop/tin-tuc-du-lich',
					},
				],
			},
			{
				title: 'Liên hệ',
				link: '/lien-he',
				subMenu: null,
			},
		],
		contact: {
			phone: '0968-910-998',
			email: 'aovuajsc@gmail.com',
		},
	};
};

export const DaoNgocXanhMenu = () => {
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
				title: 'Tin tức',
				link: null,
				subMenu: [
					{
						title: 'Tất cả tin tức',
						link: '/tin-tuc-tong-hop',
					},
					{
						title: 'Tin nổi bật',
						link: '/tin-tuc-tong-hop/khong-phan-loai',
					},
					{
						title: 'Các Hoạt Động Của Công Ty',
						link: '/tin-tuc-tong-hop/hoat-dong-cua-cong-ty',
					},
					{
						title: 'Doanh Nhân',
						link: '/tin-tuc-tong-hop/doanh-nhan',
					},
					{
						title: 'HĐ. Từ Thiện',
						link: '/tin-tuc-tong-hop/hd-tu-thien',
					},
					{
						title: 'Thành Tích',
						link: '/tin-tuc-tong-hop/thanh-tich',
					},
					{
						title: 'Tin Tức Du Lịch',
						link: '/tin-tuc-tong-hop/tin-tuc-du-lich',
					},
				],
			},
			{
				title: 'Liên hệ',
				link: '/lien-he',
				subMenu: null,
			},
		],
		contact: {
			phone: '0210-655-8822',
			email: 'dulichdaongocxanh.av@gmail.com',
		},
	};
};

export const getMenu = (siteVersion) => {
	switch (siteVersion) {
		case 'aovua.niallmurphy.dev':
			return DaoNgocXanhMenu();
		case 'aovua.com.vn':
		default:
			return AoVuaMenu();
	}
};
