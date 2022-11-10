import { AppDispatch, RootState } from "configStore";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uploadAvatar } from "Slices/auth";
import Swal from "sweetalert2";

interface UploadFile {
    avatar: FileList;
}

const UploadFile = () => {
    const { user } = useSelector((state: RootState) => state.auth);

    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const { register, handleSubmit } = useForm<UploadFile>({
        mode: "onSubmit",
    });

    const dispatch = useDispatch<AppDispatch>();

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };

    const onSubmit = (values: UploadFile) => {
        const payload = {
            ...values,
            avatar: values.avatar[0],
        };
        console.log(payload);
        dispatch(uploadAvatar(payload))
            .unwrap()
            .then((result) => {
                if (result._id) {
                    closeModal();
                    Swal.fire({
                        title: "Cập nhật thành công",
                    });
                } else {
                    Swal.fire({
                        title: "Cập nhật thất bại",
                    });
                }
            });
    };
    const onError = (values: any) => {
        console.log(values);
    };

    return (
        <div>
            <img
                className="mx-auto rounded-full"
                style={{ width: "129px", height: "129px" }}
                src={
                    user?.avatar
                        ? user.avatar
                        : "https://a0.muscache.com/defaults/user_pic-50x50.png?v=3"
                }
            />
            <button
                className="text-center text-sm text-gray-600 underline hover:text-black duration-150 block mx-auto"
                onClick={openModal}
            >
                Cập nhật ảnh
            </button>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Example Modal"
            >
                <form className="" onSubmit={handleSubmit(onSubmit, onError)}>
                    <div className="border-b mb-3">
                        <h3 className="font-semibold text-lg pb-2">
                            Cập nhật ảnh đại diện
                        </h3>
                    </div>
                    <input
                        type="file"
                        placeholder="Upload ảnh"
                        className="border p-2"
                        {...register("avatar")}
                    />
                    <div className="border-t mt-5 flex items-center justify-end">
                        <button
                            className="block bg-gray-400 hover:bg-gray-500 duration-150 px-3 py-2 mt-3  mr-3"
                            onClick={closeModal}
                        >
                            Hủy
                        </button>
                        <button
                            type="submit"
                            className="block bg-blue-700 hover:bg-blue-600 duration-150 px-3 py-2 mt-3 text-white"
                        >
                            Sửa ảnh
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default UploadFile;
