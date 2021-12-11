import { Link } from "react-router-dom";
import img from '../../assets/notfound.svg'

const NotFoundPage = () => {
    return (
        <div>
            <div className="right-column text-center d-flex justify-content-center pe-0 mt-5">
                <img id="img-fluid" className="h-auto mw-100" src={img} alt=""></img>
            </div>
            <div className="text-center">
                <h2> Oops! Terjadi kesalahan!</h2>
                <h5>Halaman yang anda minta tidak tersedia untuk saat ini</h5>
                <Link to="/" href="/#"> Back to home </Link>
            </div>
        </div>
    )
}

export default NotFoundPage