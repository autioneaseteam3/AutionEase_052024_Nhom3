import { useParams } from "react-router-dom";

function ProductDetail() {
    const {id}=useParams();
    return ( 
        <div>
            Detail
            {
                id && <div>{id}</div>
            }
        </div>
     );
}

export default ProductDetail;