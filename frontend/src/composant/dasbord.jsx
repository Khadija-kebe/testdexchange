import dijaa from "../assets/images/patern.png";
import { FiSettings } from "react-icons/fi";
import { GoChevronDown } from "react-icons/go";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { GoChevronUp } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
const Dasbord = () => {
  return (
    <>
      <div className="Dashbord flex h-screen bg-[#FAFAFA]">
        <div className="flex flex-col w-72">
         
          <div className="bg-[#0E1B6B] h-20 flex justify-center items-center">
            <h1 className="text-white font-bold">DEXCHANGE</h1>
          </div>

         
          <div
            className="sidebar flex-grow flex flex-col text-white text-center items-center "
            style={{
              backgroundImage: `
                linear-gradient(
                  180deg, 
                  #131C55 0%, 
                  rgba(19, 28, 85, 0.35) 184.8%, 
                  rgba(19, 28, 85, 0) 169.64%
                ),
                url(${dijaa})
              `,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            <div className="congigur">
              <div className=" flex items-center m-5 gap-20">
                <span className="flex items-center gap-3"><FiSettings className="text-xl" /><span className="font-semibold">Configuration</span></span>
                <span><GoChevronDown className="text-2xl" /></span>
              </div>
             <Link to='/'><button className=" w-60 py-2 px-4 bg-[#4256D0] rounded-xl">LISTE USERS</button></Link> 
              <div className=" flex items-center m-5 gap-28">
                <span className="flex items-center gap-3"><MdOutlineCreateNewFolder  className="text-xl text-[#A1A1AA]" /><span className="font-semibold text-[#A1A1AA]">Nouveau</span></span>
                <span><GoChevronUp className="text-2xl text-[#A1A1AA]" /></span>
              </div>

              <div className=" flex items-center mt-96 gap-20">
                <span className="flex items-center gap-3"><FiLogOut  className="text-4xl font-bold" /><span className="">Deconnexion</span></span>
               
              </div>
            </div>
           
          
            
            
          
          </div>
        </div>

       
        

      </div>
    </>
  );
};

export default Dasbord;
