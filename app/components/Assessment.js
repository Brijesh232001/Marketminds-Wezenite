// pages/assessment.js
import React from 'react';
import Image from 'next/image';

const Assessment = () => {
  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="bg-blue-400 text-white p-6 rounded-lg flex flex-col items-center relative" >
            <div className="absolute top-0 left-0 right-0 bottom-20 flex justify-center items-center">
              <div className="bg-white text-blue-400 rounded-full h-20 w-20 flex items-center justify-center text-3xl font-bold">
                56
              </div>
            </div>
            <div className="mt-28 text-center">Confidence Score</div>
          </div>
          <div className="bg-blue-400 text-white p-6 rounded-lg flex flex-col items-center relative">
            <div className="absolute top-0 left-0 right-0 bottom-20 flex justify-center items-center">
              <div className="bg-white text-blue-400 rounded-full h-20 w-20 flex items-center justify-center text-3xl font-bold">
                76
              </div>
            </div>
            <div className="mt-28 text-center">Related insights from your collection were found</div>
          </div>
          <div className="bg-white p-6 rounded-lg flex flex-col items-center">
            <Image src="/images/gauge.png" alt="Market Conditions" width={250} height={250} />
            <div className="mt-10 font-bold text-xl">Market Conditions</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-6">Related Insights</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Image src="/images/img_001apple.png" alt="Profile" width={50} height={50} className="rounded-full" />
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-center">
                  <div className="font-bold">William Jones</div>
                  <div className="text-gray-500">23/05</div>
                </div>
                <div className="mt-1 truncate">"Lorem ipsum dolor sit amet consectetur. Tempor lectus."</div>
              </div>
            </div>
            <div className="flex items-center">
              <Image src="/images/img_003facebook.png" alt="Profile" width={50} height={50} className="rounded-full" />
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-center">
                  <div className="font-bold">William Jones</div>
                  <div className="text-gray-500">30/05</div>
                </div>
                <div className="mt-1 truncate">"Lorem ipsum sit amet consectetur. Tempor lectus."</div>
              </div>
            </div>
            <div className="flex items-center">
              <Image src="/images/img_002search.png" alt="Profile" width={50} height={50} className="rounded-full" />
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-center">
                  <div className="font-bold">William Jones</div>
                  <div className="text-gray-500">12/06</div>
                </div>
                <div className="mt-1 truncate">"Lorem ipsum dolor sit amet consectetur lectus."</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
