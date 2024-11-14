import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Find Us</h2>
            <div className="join flex join-vertical *:bg-base-100">
                <button className="btn join-item justify-start"><FaFacebook/> Facebook</button>
                <button className="btn join-item justify-start"><BsTwitter/> Twitter</button>
                <button className="btn join-item justify-start"><BsInstagram />Instragram</button>
</div>
        </div>
    );
};

export default FindUs;