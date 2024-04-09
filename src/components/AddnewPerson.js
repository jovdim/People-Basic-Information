function AddnewPerson() {
  return (
    <div className=" w-96 h-36  mb-8  py-8 px-8 max-w-sm  bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
     <button
        className=" w-96 h-24 px-4 py-1 text-lg text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      >
        Add New
      </button>
    </div>
  );
}

export default AddnewPerson;
