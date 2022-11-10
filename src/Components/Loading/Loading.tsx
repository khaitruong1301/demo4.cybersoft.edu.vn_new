import loading from "Assets/loading.gif";

const Loading = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <img src={loading} alt={loading} />
        </div>
    );
};

export default Loading;
