import { motion } from 'framer-motion';

export const FadeInWhenVisible = ({
	initialOpacity = 0,
	initialScale = 0,
	speed = 1,
	delay = 0,
	children,
}) => (
	<motion.div
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true }}
		transition={{ duration: speed, delay }}
		variants={{
			visible: { opacity: 1, scale: 1 },
			hidden: { opacity: initialOpacity, scale: initialScale },
		}}
	>
		{children}
	</motion.div>
);

export const ScrollWhenVisible = ({
	direction = 'up',
	speed = 1,
	delay = 0,
	children,
}) => {
	const hidden = {
		opacity: 0,
	};

	switch (direction) {
		case 'up':
			hidden.y = 50;
			break;
		case 'down':
			hidden.y = -50;
			break;
		case 'left':
			hidden.x = -50;
			break;
		case 'right':
			hidden.x = 50;
			break;
		default:
			break;
	}

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{ duration: speed, delay }}
			variants={{
				visible: { opacity: 1, y: 0, x: 0 },
				hidden,
			}}
		>
			{children}
		</motion.div>
	);
};
