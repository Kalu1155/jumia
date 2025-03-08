import React from "react";

const promoBanners = [
  {
    image: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Week_10/Phone_accesories/DesktopDoublebanner572pxx250px.png"
  },
  {
    image: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Week_10/Exclusive_Offers_For_Her/UserNeed/Beauty_for_the-lover-572x250.png"
  },
  {
    image: "https://ng.jumia.is/cms/0-1-initiatives/Magic-hour/2025/February/572X250-1.jpg"
  },
  {
    image: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Global-mini-Campaigns/Week-9/DesktopDoublebanner572pxx250px.jpg"
  }
];

const PromoSection = () => {
  return (
    <div className="p-4 flex bg-[#fe9900]">
      <div className="grid grid-cols-2 gap-2 w-[%] mx-auto bg-white"> 
        {promoBanners.map((banner, index) => (
          <div key={index} className="flex justify-center ">
            <img src={banner.image} alt={`Promo ${index + 1}`} className=" rounded w-150 h-50" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoSection;
