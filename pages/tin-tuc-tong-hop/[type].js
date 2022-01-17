import { useRouter } from 'next/router';

const Post = () => {
	const router = useRouter();
	const { type } = router.query;

	return <p>{type}</p>;
};

export default Post;
