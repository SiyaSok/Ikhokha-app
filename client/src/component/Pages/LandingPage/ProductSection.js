import React from 'react';

const ProductSection = () => {
    return (
        <div>
            <div className="container Products text-center">
                <div className="row">
                    <div className="productHeading my-5 col-12">
                        <h2>Lorem ipsum something</h2>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-sm-6 col-12 d-none d-sm-block">
                        <img className="img-fluid" src="/images/ikhokha-img_2.png" alt="Hello" />
                    </div>
                    <div className="col-sm-6 col-12 productContent ">
                        <div className="productCopy ">
                            <h4>Cool Product, new Blogs</h4>
                            <p>
                                Vivamus vestibulum elit efficitur, elementum sapien a, aliquet ipsum.
                                Fusce placerat dolor id cursus finibus. Aliquam tempus facilisis ipsum sit amet molestie.
                                Proin lobortis eros a turpis tempor, sed ornare augue aliquam.
                                Donec imperdiet nulla ut placerat molestie.
                                In hendrerit blandit ante facilisis ultrices.
                                Mauris vulputate metus sit amet ex dignissim, sed hendrerit nunc rhoncus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductSection;