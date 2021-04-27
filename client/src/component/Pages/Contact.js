import React from 'react';
import PageHeader from '../util/PageHeader';
import ContactForm from './contact/ContactForm';



const Contact = () => {
    return (
        <div id="Contact" className="container-fluid main-content">
            <PageHeader heading={`Contact us`} subText={`Feel free to contect us.`} />
            <div className="container my-5">

                <div className="row ">
                    <div className="col-md-6 p-0">
                        <div className="contact">
                            <div className="kc_wrapper kc-col-inner-container">
                                <div className="contactInfo pb-4 title pt-0">
                                    <h2>Company Info</h2>
                                </div>
                                <div className="contactInfo pb-4">

                                    <div className="content-icon"><i className="fa fa-flag text-white" aria-hidden="true"></i>

                                    </div><div className="mx-4">
                                        <div className="content-title text-white"><p className="text-white">Location</p></div>
                                        <div className="content-desc text-white"><p className="text-white">22 Baker Street, London, <br />
                                    United Kingdom, W1U 3BW</p></div></div>
                                </div>
                                <div className="contactInfo pb-4">

                                    <div className="content-icon"><i className="fa fa-phone text-white" aria-hidden="true"></i>
                                    </div><div className="mx-4"><div className="content-title text-white"><p className="text-white">Make A Call</p></div>
                                        <div className="content-desc text-white"><p className="text-white">+44-20-7328-4499</p></div></div>
                                </div>
                                <div className="contactInfo pb-4">

                                    <div className="content-icon"><i className="fa fa-envelope text-white" aria-hidden="true"></i>
                                    </div><div className="mx-4">
                                        <div className="content-title text-white"><p className="text-white">Send A Mail</p></div>
                                        <div className="content-desc text-white"><p className="text-white">example@gmail.com<br />
                                        example@gmail.com</p></div></div>
                                </div>
                                <div className="contactInfo pb-4">

                                    <div className="content-icon"><i className="fa fa-globe text-white" aria-hidden="true"></i>
                                    </div><div className="mx-4"><div className="content-title text-white">
                                        <p className="text-white">Visit Our Website</p></div><div
                                            className="content-desc text-white"><p className="text-white">www.dreamitsolution.net</p></div></div>
                                </div>
                            </div></div>
                    </div>
                    <div className="col-md-6 p-0 contact-from">
                        <div className="mx-4 mt-4 ">
                            <h2>Get in Touch</h2>
                            <p className=" text-alignm">Lorem ipsum dolor sit amet,
                             consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt consectetuer adipiscing.</p>
                        </div>
                        <ContactForm />

                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-12 map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.6727453545627!2d31.067727115443127!3d-29.72923738199805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef705e59adcc74d%3A0x2bd4b97d7404caf5!2siKhokha!5e0!3m2!1sen!2sza!4v1619387355896!5m2!1sen!2sza" width="100%" height="350px"
                        allowFullScreen loading="lazy"></iframe>
                </div>
            </div>
        </div>);
}

export default Contact