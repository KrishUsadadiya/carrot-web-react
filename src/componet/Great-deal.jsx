import { Container } from "react-bootstrap";
import "./All.css";

const Greatdeal = () => {

  

    return (
        <>
            <div className="position-relative mt-5">
                <div className="greatdeal-image ">
                    <img
                        src="/public/bg-deal.jpg"
                        alt="Basket of Vegetables"
                        className="img-fluid"
                    />
                </div>
                <Container>
                    <div data-aos="fade-up" data-aos-duration="2000" className="btoom-50 border greatdeal-contant p-3">
                        <h2><span className="text-success fs-bold me-2">35%</span><small className="fs-5">OFF</small></h2>
                        <h2>Great deal on organic food.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br />do maecenas accumsan lacus vel facilisis.</p>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Greatdeal;