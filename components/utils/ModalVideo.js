import React from 'react';
import ModalVideo from 'react-modal-video';

const VideoModal = () => {
	const [isModalOpen, setIsModalOpen] = React.useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};
	return (
		<div>
			<ModalVideo
				channel="youtube"
				isOpen={isModalOpen}
				videoId="AjNvxTYR7OY"
				onClose={() => setIsModalOpen(false)}
			/>
			<div className="video-btn">
				<ul>
					<li>
						<button className="wrap" onClick={ () => openModal()}></button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default VideoModal;
