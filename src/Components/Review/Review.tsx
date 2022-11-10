import { AppDispatch, RootState } from "configStore";
import { Room } from "Interface/room";
import moment from "moment";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getReviewByRoomId } from "Slices/review";

const Review = () => {
    const { roomDetail, isLoading, error } = useSelector(
        (state: RootState) => state.room,
    );
    const { id } = useParams();

    const createRandomNumber = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    const { listReview } = useSelector((state: RootState) => state.review);
    // console.log(roomDetail?._id);
    // console.log(listReview);

    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getReviewByRoomId(id!));
    }, []);

    return (
        <div className="mt-10 pb-5 border-b">
            {/* header */}
            <div>
                <h2 className="font-semibold text-gray-800 text-xl pb-4 flex items-center">
                    <div className="flex items-center">
                        <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{
                                display: "inline-block",
                                height: 16,
                                width: 16,
                                fill: "currentcolor",
                            }}
                        >
                            <path
                                d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                                fillRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="ml-2">
                        {roomDetail?.locationId
                            ? roomDetail?.locationId.valueate / 2
                            : createRandomNumber(1, 5)}
                        {" . "}
                    </div>
                    <div className="ml-2">
                        {createRandomNumber(10, 100)} đánh giá
                    </div>
                </h2>
            </div>

            {/* đánh giá */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-4">
                <div className="flex justify-between items-center">
                    <div className="w-full text-base tracking-wide text-gray-700">
                        Mức độ sạch sẽ
                    </div>
                    <div className="w-1/2 flex justify-between items-center">
                        <div className="w-full bg-gray-200 rounded-full h-1">
                            <div
                                className="bg-gray-800 h-1 rounded-full"
                                style={{ width: "100%" }}
                            />
                        </div>
                        <div className="ml-4">5,0</div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-full text-base tracking-wide text-gray-700">
                        Độ chính xác
                    </div>
                    <div className="w-1/2 flex justify-between items-center">
                        <div className="w-full bg-gray-200 rounded-full h-1">
                            <div
                                className="bg-gray-800 h-1 rounded-full"
                                style={{ width: "100%" }}
                            />
                        </div>
                        <div className="ml-4">5,0</div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-full text-base tracking-wide text-gray-700">
                        Giao tiếp
                    </div>
                    <div className="w-1/2 flex justify-between items-center">
                        <div className="w-full bg-gray-200 rounded-full h-1">
                            <div
                                className="bg-gray-800 h-1 rounded-full"
                                style={{ width: "100%" }}
                            />
                        </div>
                        <div className="ml-4">5,0</div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-full text-base tracking-wide text-gray-700">
                        Vị trí
                    </div>
                    <div className="w-1/2 flex justify-between items-center">
                        <div className="w-full bg-gray-200 rounded-full h-1">
                            <div
                                className="bg-gray-800 h-1 rounded-full"
                                style={{ width: "95%" }}
                            />
                        </div>
                        <div className="ml-4">4,9</div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-full text-base tracking-wide text-gray-700">
                        Nhận phòng
                    </div>
                    <div className="w-1/2 flex justify-between items-center">
                        <div className="w-full bg-gray-200 rounded-full h-1">
                            <div
                                className="bg-gray-800 h-1 rounded-full"
                                style={{ width: "100%" }}
                            />
                        </div>
                        <div className="ml-4">5,0</div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-full text-base tracking-wide text-gray-700">
                        Giá trị
                    </div>
                    <div className="w-1/2 flex justify-between items-center">
                        <div className="w-full bg-gray-200 rounded-full h-1">
                            <div
                                className="bg-gray-800 h-1 rounded-full"
                                style={{ width: "100%" }}
                            />
                        </div>
                        <div className="ml-4">5,0</div>
                    </div>
                </div>
            </div>

            {/* review */}
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-20 gap-y-4 sm:w-4/5 mt-5">
                {listReview.map((review, index) => {
                    if (index < 8) {
                        return (
                            <div key={review._id} className="mb-5">
                                <div className="flex items-center">
                                    <div>
                                        {review.userId ? (
                                            <img
                                                src={review.userId.avatar}
                                                className="w-10 h-10 rounded-full overflow-hidden shadow-lg"
                                            />
                                        ) : (
                                            <svg
                                                viewBox="0 0 32 32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                                role="presentation"
                                                focusable="false"
                                                style={{
                                                    display: "block",
                                                    height: "40px",
                                                    width: "40px",
                                                    fill: "currentcolor",
                                                }}
                                                className="text-gray-500"
                                            >
                                                <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z" />
                                            </svg>
                                        )}
                                    </div>
                                    <div className="ml-3">
                                        <h4 className="font-semibold text-base tracking-wide text-gray-900">
                                            {review.userId
                                                ? review.userId.name
                                                : "No name"}
                                        </h4>
                                        <span className="font-normal text-sm text-gray-500">
                                            {moment(review.created_at).format(
                                                "DD",
                                            )}{" "}
                                            tháng{" "}
                                            {moment(review.created_at).format(
                                                "MM",
                                            )}{" "}
                                            năm{" "}
                                            {moment(review.created_at).format(
                                                "YYYY",
                                            )}
                                        </span>
                                    </div>
                                </div>
                                <div className="text-gray-800 tracking-wider">
                                    <p>{review.content}</p>
                                </div>
                            </div>
                        );
                    }
                })}
                <div className="sm:col-span-2">
                    <button className="border border-solid border-gray-900 hover:bg-gray-100 transition-all duration-200 rounded-md px-5 py-3 font-semibold text-base text-gray-800 tracking-wider">
                        Hiển thị tất cả 120 đánh giá
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Review;
