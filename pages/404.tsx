import {getLayout} from "@/components/Layout/Layout";


const NotFound = () => {
    return (
        <div>
           404 NOT FOUND
        </div>
    );
};

NotFound.getLayout = getLayout // для обертки странички, нашим layout
export default NotFound