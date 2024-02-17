import { Link } from "react-router-dom";
import { FooterLinksList } from "../../constants/FooterLink";

const FooterLinks = () => {
  return (
    <div className="block md:flex flex-wrap mx-auto">
      {FooterLinksList.map((link) => {
        return (
          <>
            <hr className="block md:hidden mt-7 w-full relative" />
            <div>
              <div className="inline-flex md:hidden flex-end pe-1">
                <button
                  title="Button"
                  type="button"
                  className="inline-flex items-center  text-sm text-white md:hidden font-bold"
                  aria-controls="footer"
                >
                  {" "}
                  <details>
                    <summary>{link.title}</summary>
                    {link.links.map((link) => {
                      return (
                        <ul>
                          <li>
                            <div className="mt-[11px] text-[13px] leading-none">
                              <Link to={"/"}>{link.title}</Link>
                            </div>
                          </li>
                        </ul>
                      );
                    })}
                  </details>
                </button>
              </div>
              <div
                className={` w-full md:flex md:w-auto lg:w-auto md:order-1`}
                id="footer"
              >
                <div className="  flex-wrap md:p-0 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  hidden md:block">
                  <div className="me-[19px] ">
                    <ul className="text-white ">
                      <li>
                        <div className="text-sm font-['Arial'] uppercase leading-snug">
                          <Link to={"/"} className="font-bold">
                            {link.title}
                          </Link>
                        </div>
                      </li>
                      <li>
                        {link.links.map((link) => {
                          return (
                            <ul>
                              <li>
                                <div className="mt-[11px] text-[13px] leading-none">
                                  <Link to={"/"}>{link.title}</Link>
                                </div>
                              </li>
                            </ul>
                          );
                        })}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default FooterLinks;
