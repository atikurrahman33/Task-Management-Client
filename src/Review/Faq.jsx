
const Faq = () => {
    return (
        <div>
            <div className='thumb'>
            <h1 className="text-4xl font-bold text-center  mb-4">FAQ S</h1>
            </div>
            <div className="faqs w-10/12 mx-auto my-12">
                <div tabIndex={0} className="mt-4 collapse collapse-plus border border-base-300 bg-base-100 rounded">
                    <div className="collapse-title font-semibold">
                        How to Login in this website?
                    </div>
                    <div className="collapse-content">
                        <p className='mt-6'>You can this website using google and email and password.</p>
                    </div>
                </div>
                <div tabIndex={0} className="mt-4 collapse collapse-plus border border-base-300 bg-base-100 rounded">
                    <div className="collapse-title  font-semibold">
                       What types of website is this?
                    </div>
                    <div className="collapse-content">
                        <p> This is a TASK MANAGEMENT website</p>
                    </div>
                </div>
                <div tabIndex={0} className="mt-4 collapse collapse-plus border border-base-300 bg-base-100 rounded">
                    <div className="collapse-title  font-semibold">
                        How can I contact with you?
                    </div>
                    <div className="collapse-content">
                        <p>You do not contact with me.</p>
                    </div>
                </div>
                <div tabIndex={0} className="mt-4 collapse collapse-plus border border-base-300 bg-base-100 rounded">
                    <div className="collapse-title  font-semibold">
                        Have any support?
                    </div>
                    <div className="collapse-content">
                        <p>Yes. We provide services 24/7 .</p>
                    </div>
                </div>
                <div tabIndex={0} className="mt-4 collapse collapse-plus border border-base-300 bg-base-100 rounded">
                    <div className="collapse-title  font-semibold">
                        Why I choose your website?
                    </div>
                    <div className="collapse-content">
                        <p>Because this website help you to manage your work</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Faq;