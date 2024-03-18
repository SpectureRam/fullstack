import {useEffect, useState} from "react";

const UserProfile = () => {
    const [name,setname] = useState('');
    const [email,setemail] = useState('');
    const [picture,setpicture] = useState('');
    const [locale,setlocale] = useState('');
    useEffect(() => {
        const token = localStorage.getItem('name');
        if (token) {
          try {
            setname(token);
            setemail(localStorage.getItem('email'));
            setpicture(localStorage.getItem('picture'));
            setlocale(localStorage.getItem('locale'));
          } catch (error) {
            console.log('Error decoding token:', error);
          }
        }
      }, []);
  return (
    <div className="container mx-auto mt-10 mb-2">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex items-center justify-center">
            <img
              className="h-24 w-24 rounded-full object-cover"
              src={picture}
              alt="User profile"
            />
          </div>
          <h3 className="text-lg leading-6 font-medium text-gray-900 text-center mt-4">
            User Profile
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500 text-center">
            This is some information about the user.
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Full name
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {name}
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {email}
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Language
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {locale}
              </dd>
  </div>
            {/*<div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                123 Main St
                <br />
                Anytown, USA 12345
              </dd>
            </div>*/}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
