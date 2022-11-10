import cn from "classnames";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className={cn("border-t mt-5 pt-5 bg-gray-100")}>
            <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4 px-10 pb-10 mb-5">
                <div className="flex flex-col space-y-4">
                    <h2 className="font-semibold">Hỗ trợ</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                        <NavLink
                            className="nav-link hover:underline"
                            rel="noopener noreferrer"
                            to="/"
                        >
                            <span>Trung tâm trợ giúp</span>
                        </NavLink>
                        <NavLink
                            className="nav-link hover:underline"
                            rel="noopener noreferrer"
                            to="/"
                        >
                            AirCover
                        </NavLink>
                        <NavLink
                            className="nav-link hover:underline"
                            rel="noopener noreferrer"
                            to="/"
                        >
                            Thông tim an toàn
                        </NavLink>
                        <NavLink
                            className="nav-link hover:underline"
                            rel="noopener noreferrer"
                            to="/"
                        >
                            Hỗ trợ người khuyết tật
                        </NavLink>
                        <NavLink
                            className="nav-link hover:underline"
                            rel="noopener noreferrer"
                            to="/"
                        >
                            Các tùy chọn hủy
                        </NavLink>
                        <NavLink
                            className="nav-link hover:underline"
                            rel="noopener noreferrer"
                            to="/"
                        >
                            Biện pháp ứng phó với đại dịch COVID-19 của chúng
                            tôi
                        </NavLink>
                        <NavLink
                            className="nav-link hover:underline"
                            rel="noopener noreferrer"
                            to="/"
                        >
                            Báo cáo lo ngại của hàng xóm
                        </NavLink>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-semibold">Cộng đồng</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                        <NavLink
                            className="nav-link hover:underline"
                            rel="noopener noreferrer"
                            to="/"
                        >
                            Airbnb.org: nhà ở cứu trợ
                        </NavLink>
                        <NavLink
                            className="nav-link hover:underline"
                            rel="noopener noreferrer"
                            to="/"
                        >
                            Hỗ trợ dân tị nạn Afghanistan
                        </NavLink>
                        <NavLink
                            className="nav-link hover:underline"
                            rel="noopener noreferrer"
                            to="/"
                        >
                            Chống phân biệt đối xử
                        </NavLink>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-semibold">Đón tiếp khách</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                        <NavLink
                            className="nav-link hover:underline"
                            rel="noopener noreferrer"
                            to="/"
                        >
                            Thử đón tiếp khách
                        </NavLink>
                        <NavLink
                            className="nav-link hover:underline"
                            rel="noopener noreferrer"
                            to="/"
                        >
                            AirCover cho Chủ nhà
                        </NavLink>
                        <NavLink
                            className="nav-link hover:underline"
                            rel="noopener noreferrer"
                            to="/"
                        >
                            Xem tài nguyên đón tiếp khách
                        </NavLink>
                        <NavLink
                            className="nav-link hover:underline"
                            rel="noopener noreferrer"
                            to="/"
                        >
                            Truy cập diễn đàn cộng đồng
                        </NavLink>
                        <NavLink
                            className="nav-link hover:underline"
                            rel="noopener noreferrer"
                            to="/"
                        >
                            Đón tiếp khách có trách nhiệm
                        </NavLink>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-semibold">Airbnb</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                        <NavLink
                            className="nav-link hover:underline"
                            rel="noopener noreferrer"
                            to="/"
                        >
                            Trang tin tức
                        </NavLink>
                        <NavLink
                            className="nav-link hover:underline"
                            rel="noopener noreferrer"
                            to="/"
                        >
                            Tìm hiểu các tính năng mới
                        </NavLink>
                        <NavLink
                            className="nav-link hover:underline"
                            rel="noopener noreferrer"
                            to="/"
                        >
                            Thư ngỏ từ các nhà sáng lập
                        </NavLink>
                        <NavLink
                            className="nav-link hover:underline"
                            rel="noopener noreferrer"
                            to="/"
                        >
                            Cơ hội nghề nghiệp
                        </NavLink>
                        <NavLink
                            className="nav-link hover:underline"
                            rel="noopener noreferrer"
                            to="/"
                        >
                            Nhà đầu tư
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 border-t fixed bottom-0 w-screen z-10  py-3 hidden md:block">
                <div className="container mx-auto px-10 flex justify-between items-center text-gray-500 ">
                    <div>
                        <span>© 2022 Airbnb, Inc.</span>
                        <span className="px-3 hover:underline cursor-pointer">
                            Quyền riêng tư
                        </span>
                        .
                        <span className="px-3 hover:underline cursor-pointer">
                            Điều khoản
                        </span>
                        .
                        <span className="px-3 hover:underline cursor-pointer">
                            Sơ đồ trang web
                        </span>
                        .
                    </div>
                    <div className="text-gray-700">
                        <span>
                            <svg
                                viewBox="0 0 16 16"
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
                                <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z" />
                            </svg>
                        </span>
                        <span className="hover:underline cursor-pointer px-3 font-medium">
                            Tiếng Việt(VN)
                        </span>
                        <i className="fa fa-dollar-sign font-medium cursor-pointer"></i>
                        <span className="hover:underline cursor-pointer px-2 font-medium">
                            USD
                        </span>
                        <span className="font-medium hover:underline">
                            Hỗ trợ tài nguyên <i className="fa fa-angle-up"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
