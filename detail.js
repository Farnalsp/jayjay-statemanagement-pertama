import { useParams, useNavigate } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate("/")}>Kembali</button>
            <h1>Halaman Detail</h1>
            <p>id: {id}</p>
        </div>
    );
}
export default Detail;