import React from "react";

const JumiaFooter = () => {
  return (
    <footer className="bg-[#313133] text-white py-8 ">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex gap-20">
          {/* JUMIA Logo Section */}
          <div className="flex">
            <h1 className="text-3xl font-bold text-white">JUMIA</h1>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBHzRDV8FUU56u77iucJVXcQyHUhLX5YY7g&s"
              alt="Jumia Logo"
              className="w-[30px] h-[30px] rounded-[60px] mt-[4px]"
            />
          </div>

          {/* Newsletter and App Download Section */}
          <div>
            <div className="flex gap-30">
              {/* Input with Button */}
              <div className="relative w-full max-w-md ">
                <p className="pb-2">New to Jumia?</p>
                <p className="pb-4 text-sm text-[#d3d3d4]">Subscribe to our newsletter to get updates on our latest offers!</p>
                <input
                  type="email"
                  placeholder="Enter E-mail Address"
                  className="w-[290px] p-2  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="absolute  tbottom-0 bg-orange-500 text-white  ml-2 p-2 rounded-[5px] hover:bg-orange-600 transition-colors">
                  Subscribe
                </button>
              </div>

              {/* App Download Section */}
              <div className="space-y-3">
                            <div className="flex gap-2">
                                <img src="https://play-lh.googleusercontent.com/AbvDKBTkteTuNMRn8g5KBgsALUWhxOQ7xmBkQj6GVxXXhX68zqbDzJ0wymV6hCUzHOg=w480-h960-rw" alt="" className="w-10 h-11 pt-2" />
                            <div className="">
                            <p className="text-md font-semibold ">Download Our Apps</p>
                            <p>Get access to exclusive offers!</p>
                            </div>
                            </div>
                            <div className="flex space-x-2">
                                <img src="https://shopfront.takealot.com/30f85a01662a5c330ce05023700842e05a751139/static/media/src/images/app-store.svg-edce310696aa7f6191a1.svg" alt=""/>
                                <img src="https://shopfront.takealot.com/30f85a01662a5c330ce05023700842e05a751139/static/media/src/images/google-play.svg-7a92427373a19e40a662.svg" alt=""/>
                                
                            </div>
                        </div>
            </div>

            {/* App Download Text */}
            <div className="mt-4 flex">
                 <input className="m-2" type="checkbox"  />
             <div>
             <p className="text-[13px] text-gray-400">I agree to Jumia’s Privacy and Cookie Policy. You can unsubscribe from newsletters at any time.</p>
             <p className="text-sm text-gray-400">Get access to exclusive offers!</p>
             </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
       
      </div>
    </footer>
  );
};

export default JumiaFooter;