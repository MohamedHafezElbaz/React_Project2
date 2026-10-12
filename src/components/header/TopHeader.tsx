import { Link } from "react-router-dom"
import Logo from "../../assets/img/logo.png"
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

const TopHeader = () => {
  return (
    <header>
        
        <div className="container ">
            {/* container عشان يخلى فى مسافة من اليمين والشمال */}
            <Link className="w-40" to="/"> <img src={Logo} alt="" /></Link>
            {/* ده كده اللوجو الى عالشمال */}

            <form action="" className="form">
                <input type="text" id="search" name="search" placeholder="search for Products.." className="h-11 w-110 py-1.5 pr-4 pl-5" />
                <button type="submit" className="text-white bg bg-primary  h-11 w-15 cursor-pointer rounded-[0_30px_30px_0] flex justify-center items-center "><FaSearch /></button>
            </form>
            {/* ده الانبوت والايقون الى فى النص  */}

            <div className="flex gap-7">
                <div className="icon" >
                    <CiHeart className="text-3xl" />
                    <span className="cart">0</span>
                </div>
                <div className="icon">
                    <FiShoppingCart className="text-3xl"/>
                    <span className="cart">0</span>
                </div>
            </div>
            {/* الايقونز الى عاليمين */}
        </div>
      
    </header>
  )
}

export default TopHeader
