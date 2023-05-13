import { Circles } from 'react-loader-spinner';

const Loader = () => (
    <div>
        <Circles
            height="80"
            width="80"
            color="#3f51b5"
            ariaLabel="circles-loading"
            wrapperStyle={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
            wrapperClass=""
            visible={true}
        />
    </div>
);

export default Loader;