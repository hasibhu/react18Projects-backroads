import Title from "./Title";

import {serviceData} from '../ServiceData'


const Services = () => {
    return (
        <section className="section services" id="services">
            
            <Title title="our" subtitle="services"></Title>
            
            <div className="section-center services-center">

                {
                    serviceData.map((data) => {
                        const { id, img, title, description } = data;
                        return (
                            <article  key={id} className="service ">
                                <span className="service-icon">
                                    <img className=" h-8" src={img} alt="" />
                                </span>
                                <div className="service-info">
                                    <h4 className="service-title">{title}</h4>
                                    <p className="service-text">
                                        {description}
                                    </p>
                                </div>
                            </article>
                        )
                    })
                }

                {/* <article className="service">
                    <span className="service-icon">
                        <i className="fas fa-wallet fa-fw"></i>
                        </span>
                    <div className="service-info">
                        <h4 className="service-title">saving money</h4>
                        <p className="service-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Asperiores, officia.
                        </p>
                    </div>
                </article>

                <article className="service">
                    <span className="service-icon"><i className="fas fa-tree fa-fw"></i></span>
                    <div className="service-info">
                        <h4 className="service-title">endless hiking</h4>
                        <p className="service-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Asperiores, officia.
                        </p>
                    </div>
                </article>

                <article className="service">
                    <span className="service-icon"><i className="fas fa-socks fa-fw"></i></span>
                    <div className="service-info">
                        <h4 className="service-title">amazing comfort</h4>
                        <p className="service-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Asperiores, officia.
                        </p>
                    </div>
                </article> */}
            </div>
        </section>
    );
};

export default Services;