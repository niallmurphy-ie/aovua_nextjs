import React from 'react';
import ModalVideo from 'react-modal-video';
import { extractVideoID } from '../../utils/helperFunctions';

const VideoModal = ({ greetingYoutubeURL }) => {
	const [isModalOpen, setIsModalOpen] = React.useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const videoID = extractVideoID(greetingYoutubeURL);

	return !videoID ? null : (
		<div>
			<ModalVideo
				channel="youtube"
				isOpen={isModalOpen}
				videoId={videoID}
				onClose={() => setIsModalOpen(false)}
			/>
			<div className="video-btn">
				<ul>
					<li>
						<button
							className="wrap"
							onClick={() => openModal()}
						></button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default VideoModal;
