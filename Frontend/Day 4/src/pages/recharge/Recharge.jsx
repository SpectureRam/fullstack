import { useState } from 'react';
import Progress from './Progress';
import { States, Districts } from 'state-district-component';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {Link} from "react-router-dom"

const Recharge = () => {
  const [state, setState] = useState();
  const [district, setDistrict] = useState();
  const [operator, setOperator] = useState();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');

  const getStateValue = (value) => {
    setState(value);
  };

  const getDistrictValue = (value) => {
    setDistrict(value);
  };

  const handleOperatorChange = (event) => {
    setOperator(event.target.value);
  };

  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);
  };

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };


  return (
    <div className="flex bg-gray-100 min-h-screen">
      <div className="w-1/4 bg-white rounded-lg overflow-hidden shadow-md">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Mobile Recharge</h2>
          <div className="mb-8">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <PhoneInput
              country={'in'}
              value={phoneNumber}
              onChange={handlePhoneChange}
              inputProps={{
                name: 'phoneNumber',
                id: 'phoneNumber',
                className: 'mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md',
                placeholder: 'Enter phone number',
                style: { fontSize: '1.1rem', padding: '12px' }
              }}
            />
          </div>
          <div className="mb-8">
            <label htmlFor="operator" className="block text-sm font-medium text-gray-700">Select Mobile Operator</label>
            <select id="operator" name="operator" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md" onChange={handleOperatorChange}>
              <option value="">Select Operator</option>
              <option value="Operator 1">Jio</option>
              <option value="Operator 2">Airtel</option>
              <option value="Operator 3">VI</option>
              <option value="Operator 4">Bsnl</option>
            </select>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-2">Select Circle</h3>
            <div className="space-y-2">
              <States
                styles={{
                  width: '100%',
                  outline: 'none',
                  padding: '12px',
                  background: 'white',
                  border: '1px solid #E5E5E5',
                  borderRadius: '6px',
                  fontSize: '1.1rem',
                }}
                onChange={getStateValue}
                options={{
                  sort: true,
                }}
              />
              <Districts
                state={state}
                styles={{
                  width: '100%',
                  outline: 'none',
                  padding: '12px',
                  background: 'white',
                  border: '1px solid #E5E5E5',
                  borderRadius: '6px',
                  fontSize: '1.1rem',
                }}
                onChange={getDistrictValue}
                options={{
                  sort: true,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <Progress progress={25} />
        <div className="max-w-3xl mx-auto mt-6">
          <div className="bg-white overflow-hidden shadow-xl rounded-lg divide-y divide-gray-200">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg font-semibold text-gray-800">Mobile Recharge</h2>
              <p className="mt-1 text-sm text-gray-500">Enter the receiver&apos;s mobile number and select a recharge option.</p>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div>
                <h3 className="text-sm font-medium text-gray-600">Select Top-up</h3>
                <div className="mt-2">
                  <select id="plan" name="plan" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg" onChange={handlePlanChange}>
                    <option value="">Select Plan</option>
                    <option value="Plan 3">Plan 1 - ₹49</option>
                    <option value="Plan 1">Plan 2 - ₹99</option>
                    <option value="Plan 2">Plan 3 - ₹199</option>
                    <option value="Plan 3">Plan 4 - ₹299</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="px-4 py-4 sm:px-6 flex justify-end">
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"><Link to="/user/order">Proceed to Checkout</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recharge;