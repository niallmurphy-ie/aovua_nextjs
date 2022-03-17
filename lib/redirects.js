module.exports = async () => [
	{
		source: '/testR',
		destination: '/',
		permanent: true,
	},
	{
		source: '/:location/chua/:slug',
		destination: '/:location/dich-vu/:slug',
		permanent: true,
	},
	{
		source: '/:location/hoi-nghi-hoi-thao/:slug',
		destination: '/:location/hoi-thao-su-kien/:slug',
		permanent: true,
	},
	{
		source: '/:location/loai-phong/:nonsense/:slug',
		destination: '/:location/khach-san-nha-hang/:slug',
		permanent: true,
	},
	{
		source: '/ao-vua-xanh/dich-vu/gia-ve-vao-khu-du-lich-ao-vua-2019',
		destination:
			'/ao-vua-xanh/vui-choi-giai-tri/gia-ve-vao-khu-du-lich-ao-vua-2019',
		permanent: true,
	},
	{
		source: '/tin-tuc-tong-hop/news-events/:slug',
		destination: '/tin-tuc-tong-hop/hd-tu-thien/:slug',
		permanent: true,
	},
	{
		source: '/tin-tuc',
		destination: '/tin-tuc-tong-hop',
		permanent: true,
	},
];
