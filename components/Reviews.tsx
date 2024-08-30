import { reviews } from "@/data";
import Image from "next/image";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const Reviews = () => {
	return (
		<div className="py-16 lg:py-24" id="reviews">
			<div className="flex justify-center">
				<p className="uppercase font-semibold tracking-widest n-gradient text-transparent bg-clip-text">
					What others are saying
				</p>
			</div>
			<h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-center mt-6">
				Word on the Street About Us
			</h2>

			<p className="text-center md:text-lg  mt-4 max-w-md mx-auto">
				Few words from our loyal customers.
			</p>

			<div className="mt-24">
				<div className="overflow-hidden  [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
					<div className="flex space-x-8 animate-scroll">
						{reviews.map((review, idx) => (
							<div
								className="w-[90vw] max-w-full relative rounded-2xl flex-shrink-0 border border-black/10 p-5 md:px-10 py-8 lg:w-[33vw] md:w-[60vw]"
								key={idx}
							>
								<div className="flex flex-col">
									<div className="flex items-center mb-4">
										<Image
											src={review.profilePic}
											alt={review.username}
											width={100}
											height={100}
											className="rounded-full h-16 w-16" // Adjusted size for consistency
										/>
										<div className="ml-5 flex flex-col justify-center">
											<div className="flex">
												<p className="text-lg font-semibold truncate">
													{review.username}
												</p>
												<div className="ml-2 flex items-center gap-0.5">
													{Array.from({ length: 5 }, (_, i) => {
														if (i < Number(review.rating[0])) {
															return (
																<FaStar
																	key={i}
																	className={` text-yellow-500 ${
																		i < Number(review.rating[0])
																			? "opacity-100"
																			: "opacity-50"
																	}`}
																	size={20}
																/>
															);
														}
														return (
															<FaRegStar
																key={i}
																className={` text-yellow-500 ${
																	i < Number(review.rating[0])
																		? "opacity-100"
																		: "opacity-50"
																}`}
																size={20}
															/>
														);
													})}
												</div>
											</div>
											<p className="text-base truncate text-gray-500">
												{review.date}
											</p>
										</div>
									</div>
									<p className="text-base mt-2 flex-1 overflow-hidden text-ellipsis text-gray-800">
										{review.reviewText}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reviews;
