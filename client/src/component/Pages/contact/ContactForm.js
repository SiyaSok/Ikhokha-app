import React from 'react';

const ContactForm = () => {
    return (<div className="my-4">
        <form className="row g-3 mx-4 ">
            <div className="col-md-6">
                <input type="text" className="form-control" id="Name" placeholder="Name" />
            </div>
            <div className="col-md-6">
                <input type="email" className="form-control" id="Email" placeholder="Email" />
            </div>
            <div className="col-md-6">
                <input type="text" className="form-control" id="Name" placeholder="Phone" />
            </div>
            <div className="col-md-6">
                <input type="email" className="form-control" id="Email" placeholder="website" />
            </div>
            <div className="col-12">
                <textarea type="textarea" className="form-control" id="Email" cols="30" rows="7" placeholder="Your Message" />
            </div>

            <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
        </form>
    </div>);
}

export default ContactForm;