import { Link } from 'react-router-dom';
import Progress from './Progress';

const OrderSummary = () => {
  return (
    <div className="flex justify-center items-center h-screen pt-10 mt-8 mb-14">
      <div className="bg-white shadow-lg rounded-lg p-8 space-y-6 max-w-md w-full">
        <Progress progress={50} />
        <h3 className="text-2xl font-semibold text-center mb-4">Confirm Recharge Details</h3>
        <hr className="border-t border-gray-300" />
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <p className="text-sm text-gray-600">Mobile Number:</p>
            <p className="text-lg font-medium">(91) 9898989898</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-gray-600">Operator/Circle:</p>
            <p className="text-lg font-medium">Vodafone | Gujarat</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-gray-600">Plan:</p>
            <p className="text-lg font-medium">Mobile top-up</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-gray-600">Validity:</p>
            <p className="text-lg font-medium">Talktime</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-gray-600">Amount:</p>
            <p className="text-lg font-medium">$150</p>
          </div>
        </div>
        <p className="text-sm text-gray-600">Plan Description:</p>
        <p className="text-sm text-gray-600">Local calls free & STD calls free & Roaming Incoming & Outgoing calls free & 300 Local & National SMS & 1 GB 3G/4G Data & Data Validity 28 day(s) & For 3G/4G user - T&C apply</p>
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold">Payment Amount:</p>
            <p className="text-lg font-semibold">$150</p>
          </div>
        </div>
        {/* <p className="text-center"><button className="text-blue-500 hover:underline" data-bs-toggle="collapse" href="#couponCode" aria-expanded="false" aria-controls="couponCode">Apply a Coupon Code</button></p> */}
        {/* <div id="couponCode" className="collapse">
          <h3 className="text-lg font-semibold">Coupon Code</h3>
          <div className="flex gap-2">
            <input className="border border-gray-300 rounded-md px-3 py-2" placeholder="Coupon Code" aria-label="Promo Code" type="text" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" type="submit">Apply</button>
          </div>
        </div> */}
        <div className="text-center">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600" type="submit"><Link to="/user/payment">Make Payment</Link></button>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
