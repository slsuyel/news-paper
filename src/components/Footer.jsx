import React from 'react';

const Footer = () => {
    return (
        <footer className="container my-4 text-white">
            <div>
                <img
                    draggable="false"
                    src="https://www.tepriganjhighschool.edu.bd/public/assets/img/footer_top_bg.png"
                    alt="footer_top_bg"
                    className="img-fluid w-100"
                />
            </div>

            <div style={{ background: '#14142B' }}>
                <div className="row text-center">
                    <div className="col-md-6 col-lg-4">

                        <p className="mb-0 mt-1">
                            সম্পাদক: এস.কে. দোয়েল <br />
                            বার্তা সম্পাদক: মোবারক হোসাইন <br />
                            মফস্বল সম্পাদক: এম আরই রতন <br />
                            ইমেইলঃ alokitotetulia@gmail.com
                        </p>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <p className="fs-5 mb-0 mt-2">যোগাযোগ</p>
                        <p>নিউজ রুমঃ ০১৭৫৫৪৯০৮৯৪ <br />
                            বার্তা সম্পাদকঃ ০১৩০৩১৫০০৭০ <br />
                            মফস্বল সম্পাদকঃ০১৭৯৪-৯৯৩৯৯৪ <br />
                            ইমেইলঃ news.alokitotetulia@gmail.com <br />
                            </p>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <p className="fs-5 mb-0 mt-2">কারিগরি সহায়তায়:</p>
                        <a href="#" className="text-white">
                            সুয়েল হক
                        </a>
                        <p className="mt-4 text-secondary">
                            কপিরাইট ©২০২৩ সর্বস্বত্ব সংরক্ষিত
                        </p>
                    </div>
                </div>
            </div>


        </footer>
    );
};

export default Footer;
