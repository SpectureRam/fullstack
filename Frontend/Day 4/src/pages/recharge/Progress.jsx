import PropTypes from 'prop-types';
const Progress = ({ progress }) => {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h2 className="sr-only">Steps</h2>

      <div className="flex items-center justify-between mb-6">
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <div className={`h-full bg-blue-500 rounded-full transition-width ease-in-out duration-500`} style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <ol className="grid grid-cols-3 gap-4 text-sm font-medium text-gray-500">
        <li className="flex items-center gap-2">
          <span className="hidden sm:inline text-blue-600">Details</span>
          <svg className="w-6 h-6 sm:w-5 sm:h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>
          </svg>
        </li>

        <li className="flex items-center justify-center gap-2">
          <span className="hidden sm:inline text-blue-600">Summary</span>
          <svg className="w-6 h-6 sm:w-5 sm:h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </li>

        <li className="flex items-center justify-end gap-2">
          <span className="hidden sm:inline text-blue-600">Payment</span>
          <svg className="w-6 h-6 sm:w-5 sm:h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
          </svg>
        </li>
      </ol>
    </div>
  );
}

Progress.propTypes = {
    progress: PropTypes.number.isRequired,
  };

export default Progress;