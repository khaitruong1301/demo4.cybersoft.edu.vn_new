// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import "./Filter.css";

type Props = {};

const Filter = (props: Props) => {
    return (
        <div>
            <div className="h-28"></div>
            <div className="container mx-auto sticky top-32">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={10}
                    slidesPerGroup={1}
                    loop={false}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper text-center"
                >
                    <SwiperSlide>
                        <img
                            className=""
                            src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
                            width={24}
                            height={24}
                        />
                        <span>Thật ấn tượng</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className=""
                            src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg"
                            width={24}
                            height={24}
                        />
                        <span>Công viên quốc gia</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className=""
                            src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
                            width={24}
                            height={24}
                        />

                        <span>Hồ bơi tuyệt vời</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className=""
                            src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg"
                            width={24}
                            height={24}
                        />

                        <span>Đảo</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className=""
                            src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
                            width={24}
                            height={24}
                        />

                        <span>Bãi biển</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className=""
                            src="https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg"
                            width={24}
                            height={24}
                        />

                        <span>Nhà nhỏ</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className=""
                            src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg"
                            width={24}
                            height={24}
                        />

                        <span>Thiết kế</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className=""
                            src="https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg"
                            width={24}
                            height={24}
                        />

                        <span>Bắc cực</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className=""
                            src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"
                            width={24}
                            height={24}
                        />

                        <span>Cabin</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className=""
                            src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg"
                            width={24}
                            height={24}
                        />

                        <span>Ven hồ</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className=""
                            src="https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg"
                            width={24}
                            height={24}
                        />

                        <span>Chơi golf</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className=""
                            src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                            width={24}
                            height={24}
                        />

                        <span>Khung cảnh tuyệt vời</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className=""
                            src="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg"
                            width={24}
                            height={24}
                        />

                        <span>Hang động</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className=""
                            src="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg"
                            width={24}
                            height={24}
                        />

                        <span>Lướt sóng</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className=""
                            src="https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg"
                            width={24}
                            height={24}
                        />

                        <span>Khung nhà chữ A</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className=""
                            src="https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg"
                            width={24}
                            height={24}
                        />

                        <span>Nhà dưới lòng đất</span>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Filter;
