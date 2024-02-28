const FooterSignUp = () => {
  return (
    <div className="w-full sm:w-[330px] h-[223px] sm:h-[170px] bg-purple-100 rounded-[10px] flex flex-col p-[20px] mx-auto">
      <div className="text-center mb-7 text-constPurple text-xs sm:text-sm leading-normal">
        To get the latest on pet adoption and pet
        <br />
        care, sign up for the Petfinder newsletter.
      </div>
      <button className="w-full bg-constPurple  border-2 rounded-full py-4 text-center hover:font-semibold ease-in-out duration-[520ms] hover:shadow-none shadow-lg text-white hover:bg-white hover:text-[#6605b5] uppercase leading-tight">
        Sign Up
      </button>
    </div>
  );
};

export default FooterSignUp;
