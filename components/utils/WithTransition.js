import { motion } from 'framer-motion';

const WithTransition = ({ children }) => {
	const variants = {
		hidden: { opacity: 0, x: -20, y: 0 },
		enter: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: 0, y: -100 },
	};
	// eslint-disable-next-line react/display-name
	return (
		<motion.main
			variants={variants} // Pass the variant object into Framer Motion
			initial="hidden" // Set the initial state to variants.hidden
			animate="enter" // Animated state to variants.enter
			exit="exit" // Exit state (used later) to variants.exit
			transition={{ duration: 1.25 }} // Set the transition to linear
			className=""
		>
			{children}
		</motion.main>
	);
};

export default WithTransition;
