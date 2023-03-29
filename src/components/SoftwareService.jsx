import React from 'react'
import CashBot from '-!url-loader!../images/logos/CashBot.webp'
const SoftwareService = ({image, side,title}) => {
  return (
    
   <div className="max-w-sm w-[45rem] sm:w-auto lg:mt-0 lg:w-[67.8125rem] h-auto ml-60 mr-0 bg-slate-100 rounded-xl mx-20 h-100 w-50 overflow-hidden shadow-lg">

  <img className="w-full" src={image} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{title}</div>
    <p className="text-gray-700 text-base">
      {side}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Mobile</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#AI</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Web</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Bloc</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#USSD</span>
  </div>
</div> 
  )
}

export default SoftwareService
