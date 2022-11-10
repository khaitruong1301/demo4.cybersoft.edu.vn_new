import verify from "Assets/verify.png";
import classNames from "classnames";
import { AppDispatch, RootState } from "configStore";
import { UpdateUser, UserUpdateValues } from "Interface/auth";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserDetail, updateUser } from "Slices/auth";

import Modal from "react-modal";
import UploadFile from "Components/UploadFile/UploadFile";
import Swal from "sweetalert2";
import { TabTitle } from "Utill/GenaralFunction";

const Info = () => {
    const { user } = useSelector((state: RootState) => state.auth);
    TabTitle(`Thông tin cá nhân - ${user?.name}`);
    const { id } = useParams();

    const [showInputName, setShowInputName] = useState<boolean>(false);
    const [showInputGender, setShowInputGender] = useState<boolean>(false);
    const [showInputBirthDay, setShowInputBirthDay] = useState<boolean>(false);
    const [showInputEmail, setShowInputEmail] = useState<boolean>(false);
    const [showInputPhone, setShowInputPhone] = useState<boolean>(false);
    const [showInputAddress, setShowInputAddress] = useState<boolean>(false);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getUserDetail(id!));
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors }, //liệt kê các input đang lỗi
    } = useForm<UserUpdateValues>({
        //defaultValues khai báo giá trị mặc định cho các input trong form
        defaultValues: {
            name: user?.name,
            gender: user?.gender,
            birthday: user?.birthday,
            email: user?.email,
            phone: user?.phone,
            address: user?.address,
        },
        //mode: cacash validation đc trigger (defaute là submit)
        mode: "onSubmit",
    });

    const onSubmit = async (values: UserUpdateValues) => {
        const data: UpdateUser = { id: user?._id!, values: values };
        await dispatch(updateUser(data))
            .unwrap()
            .then((result) => {
                if (result._id) {
                    Swal.fire({
                        title: "Cập nhật thành công",
                    });
                } else {
                    Swal.fire({
                        title: "Cập nhật thất bại",
                    });
                }
            });
        dispatch(getUserDetail(id!));
    };
    const onError = (values: any) => {
        console.log(values);
    };

    return (
        <div className="container mx-auto px-10">
            <div className="h-28"></div>
            <div className="flex flex-wrap">
                {/* left  */}
                <div className="w-full md:w-1/4">
                    <div className="w-full sticky top-32 border rounded-lg p-5">
                        <UploadFile />

                        <div className="mt-2">
                            <div className="flex items-center">
                                <img
                                    src={verify}
                                    width="30px"
                                    className="text-green-600"
                                />
                                <span className="ml-2 font-semibold text-lg">
                                    Xác minh danh tính
                                </span>
                            </div>
                            <div className="">
                                <p className="text-gray-600 py-1 text-base">
                                    Xác minh danh tính của bạn với huy hiệu xác
                                    minh danh tính.
                                </p>
                                <button className="border px-5 py-2.5 rounded-lg hover:bg-gray-200 duration-200 font-semibold text-gray-800 my-1">
                                    Nhận huy hiệu
                                </button>
                            </div>
                        </div>

                        <div className="mt-2 border-t py-2">
                            <div className="font-semibold text-lg text-gray-800">
                                Đã xác nhận
                            </div>
                            <div className="mt-2">
                                <i className="fa-solid fa-check" />
                                <span className="ml-2 text-sm italic">
                                    Địa chỉ email
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right  */}
                <div className="w-full md:w-3/4 lg:w-3/5">
                    <div className="px-10">
                        <form onSubmit={handleSubmit(onSubmit, onError)}>
                            <div className=" border-b py-5">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="text-base tracking-wide">
                                            Tên pháp lý
                                        </div>
                                        <div className="text-sm tracking-wide text-gray-500">
                                            {user?.name}
                                        </div>
                                    </div>
                                    <div>
                                        <a
                                            className="underline font-medium text-sm tracking-wide text-gray-700 hover:text-black duration-150 cursor-pointer"
                                            onClick={() =>
                                                setShowInputName(!showInputName)
                                            }
                                        >
                                            Thay đổi
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className={classNames(
                                        "mt-2",
                                        showInputName ? "block" : "hidden",
                                    )}
                                >
                                    <input
                                        {...register("name")}
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder={user?.name}
                                    />
                                    <button
                                        className="px-5 py-3 mt-2 bg-gray-600 text-white hover:bg-black duration-200 rounded-lg"
                                        onClick={() =>
                                            setShowInputName(!showInputName)
                                        }
                                    >
                                        Lưu
                                    </button>
                                </div>
                            </div>
                            <div className=" border-b py-5">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="text-base tracking-wide">
                                            Giới tính
                                        </div>
                                        <div className="text-sm tracking-wide text-gray-500">
                                            {user?.gender ? "Nam" : "Nữ"}
                                        </div>
                                    </div>
                                    <div>
                                        <a
                                            className="underline font-medium text-sm tracking-wide text-gray-700 hover:text-black duration-150 cursor-pointer"
                                            onClick={() =>
                                                setShowInputGender(
                                                    !showInputGender,
                                                )
                                            }
                                        >
                                            Thay đổi
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className={classNames(
                                        "mt-2",
                                        showInputGender ? "block" : "hidden",
                                    )}
                                >
                                    <select
                                        {...register("gender")}
                                        id="countries"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                    >
                                        <option value="true">Nam</option>
                                        <option value="false">Nữ</option>
                                    </select>

                                    <button
                                        className="px-5 py-3 mt-2 bg-gray-600 text-white hover:bg-black duration-200 rounded-lg"
                                        onClick={() =>
                                            setShowInputGender(!showInputGender)
                                        }
                                    >
                                        Lưu
                                    </button>
                                </div>
                            </div>
                            <div className=" border-b py-5">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="text-base tracking-wide">
                                            Ngày sinh
                                        </div>
                                        <div className="text-sm tracking-wide text-gray-500">
                                            {moment(user?.birthday)
                                                .format("DD-MM-YYYY")
                                                .toString()}
                                        </div>
                                    </div>
                                    <div>
                                        <a
                                            className="underline font-medium text-sm tracking-wide text-gray-700 hover:text-black duration-150 cursor-pointer"
                                            onClick={() =>
                                                setShowInputBirthDay(
                                                    !showInputBirthDay,
                                                )
                                            }
                                        >
                                            Thay đổi
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className={classNames(
                                        "mt-2",
                                        showInputBirthDay ? "block" : "hidden",
                                    )}
                                >
                                    <input
                                        {...register("birthday")}
                                        type="date"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    />

                                    <button
                                        className="px-5 py-3 mt-2 bg-gray-600 text-white hover:bg-black duration-200 rounded-lg"
                                        onClick={() =>
                                            setShowInputBirthDay(
                                                !showInputBirthDay,
                                            )
                                        }
                                    >
                                        Lưu
                                    </button>
                                </div>
                            </div>
                            <div className=" border-b py-5">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="text-base tracking-wide">
                                            Địa chỉ email
                                        </div>
                                        <div className="text-sm tracking-wide text-gray-500">
                                            {user?.email}
                                        </div>
                                    </div>
                                    <div>
                                        <a
                                            className="underline font-medium text-sm tracking-wide text-gray-700 hover:text-black duration-150 cursor-pointer"
                                            onClick={() =>
                                                setShowInputEmail(
                                                    !showInputEmail,
                                                )
                                            }
                                        >
                                            Thay đổi
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className={classNames(
                                        "mt-2",
                                        showInputEmail ? "block" : "hidden",
                                    )}
                                >
                                    <input
                                        {...register("email")}
                                        type="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder={user?.email}
                                    />
                                    <button
                                        className="px-5 py-3 mt-2 bg-gray-600 text-white hover:bg-black duration-200 rounded-lg"
                                        onClick={() =>
                                            setShowInputEmail(!showInputEmail)
                                        }
                                    >
                                        Lưu
                                    </button>
                                </div>
                            </div>
                            <div className=" border-b py-5">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="text-base tracking-wide">
                                            Số điện thoại
                                        </div>
                                        <div className="text-sm tracking-wide text-gray-500">
                                            {user?.phone}
                                        </div>
                                    </div>
                                    <div>
                                        <a
                                            className="underline font-medium text-sm tracking-wide text-gray-700 hover:text-black duration-150 cursor-pointer"
                                            onClick={() =>
                                                setShowInputPhone(
                                                    !showInputPhone,
                                                )
                                            }
                                        >
                                            Thay đổi
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className={classNames(
                                        "mt-2",
                                        showInputPhone ? "block" : "hidden",
                                    )}
                                >
                                    <input
                                        {...register("phone")}
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder={user?.phone}
                                    />
                                    <button
                                        className="px-5 py-3 mt-2 bg-gray-600 text-white hover:bg-black duration-200 rounded-lg"
                                        onClick={() =>
                                            setShowInputPhone(!showInputPhone)
                                        }
                                    >
                                        Lưu
                                    </button>
                                </div>
                            </div>
                            <div className=" border-b py-5">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="text-base tracking-wide">
                                            Địa chỉ
                                        </div>
                                        <div className="text-sm tracking-wide text-gray-500">
                                            {user?.address}
                                        </div>
                                    </div>
                                    <div>
                                        <a
                                            className="underline font-medium text-sm tracking-wide text-gray-700 hover:text-black duration-150 cursor-pointer"
                                            onClick={() =>
                                                setShowInputAddress(
                                                    !showInputAddress,
                                                )
                                            }
                                        >
                                            Thay đổi
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className={classNames(
                                        "mt-2",
                                        showInputAddress ? "block" : "hidden",
                                    )}
                                >
                                    <input
                                        {...register("address")}
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder={user?.address}
                                    />
                                    <button
                                        className="px-5 py-3 mt-2 bg-gray-600 text-white hover:bg-black duration-200 rounded-lg"
                                        onClick={() =>
                                            setShowInputAddress(
                                                !showInputAddress,
                                            )
                                        }
                                    >
                                        Lưu
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
