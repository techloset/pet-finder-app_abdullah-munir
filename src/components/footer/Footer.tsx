import FooterImg from "../../assets/images/footer/FooterImg.svg";
import Logo from "../../assets/images/footer/Logo.png";
import FooterBottomLink from "../footerBottomLink/FooterBottomLink";
import FooterBottom from "../footerBottom/FooterBottom";
import FooterSignUp from "../footerSignUp/FooterSignUp";
import FooterLinks from "../footerLinks/FooterLinks";
const Footer = () => {
  return (
    <>
      <div className="w-full h-11 text-black bg-red-600 justify-center items-center inline-flex">
        <img src={FooterImg} alt="" />
      </div>
      <footer className="bg-constPurple">
        <div className="flex flex-col mx-[15px] px-[50px] py-[40px]">
          <div className="mx-auto md:mx-[5rem] lg:mx-[8rem] xl:mx-[3%] 2xl:mx-[160px]">
            <img src={Logo} alt="" />
          </div>

          <div className="flex mt-[20px] flex-wrap-reverse justify-around items-end">
            <div className="block md:flex flex-wrap w-full sm:w-[70%]">
              <FooterLinks />
            </div>
            <FooterSignUp />
          </div>
        </div>
      </footer>
      <div className="bg-constPurple">
        <FooterBottomLink />
      </div>
      <div className="bg-customPurple">
        <FooterBottom />
      </div>
    </>
  );
};

export default Footer;
