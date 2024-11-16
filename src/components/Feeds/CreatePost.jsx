import React from 'react';

const CreatePost = () => {
	const actions = [
		{ icon: "photo", label: "A photo" },
		{ icon: "play", label: "Video" },
		{ icon: "calendar", label: "Event" },
		{ icon: "edit", label: "To write an article" },
	];

	return (
		<div className="w-full border border-white bg-black p-4 rounded-lg">
			<div className="flex items-center mb-4">
				<img
					src="https://via.placeholder.com/50"
					alt="User Avatar"
					className="w-10 h-10 rounded-full mr-4"
				/>
				<h2 className="text-lg font-semibold text-white">New Publication</h2>
			</div>

			<div className="flex space-x-4">
				{actions.map((action, index) => (
					<button
						key={index}
						className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg flex items-center"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6 mr-2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d={`M${
									action.icon === "photo"
										? "12 12"
										: action.icon === "play"
										? "9 6l6 6-6 6"
										: action.icon === "calendar"
										? "8 7V5m0 9l4-4m-4 4l4 4m-4-4h12"
										: "12 4v5m0 4h4m0-4h-4m4 4h4m0 0h-4m-4 4h4m0 0h-4"
								}`}
							/>
						</svg>
						{action.label}
					</button>
				))}
			</div>
		</div>
	);
};

export default CreatePost;