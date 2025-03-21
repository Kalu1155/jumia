import React from "react";

const specifications = {
  keyFeatures: [
    "Alcoholic drink",
    "20cl",
    "An exotic combination of spicy cinnamon and fresh black pepper",
    "Scotch whisky",
    "Pocket size",
  ],
  details: {
    SKU: "JO620GR0YRZMUNAFAMZ",
    "GTIN Barcode": "05000267173641",
    "Weight (kg)": "1",
    Color: "N/A",
    "Main Material": "N/A",
    "Shop Type": "Jumia Mall",
    "NAFDAC No.": "N/A",
  },
};

const Specifications = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 border-b-1 p-4 ">Specifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-2">KEY FEATURES</h3>
          <ul className="list-disc list-inside text-sm">
            {specifications.keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="border rounded-lg p-4 ">
          <h3 className="font-semibold mb-2">SPECIFICATIONS</h3>
          <ul className="text-sm">
            {Object.entries(specifications.details).map(([key, value], index) => (
              <li key={index}>
                <span className="font-semibold  ">{key}:</span> {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
