import axios from "axios"
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { GoSignIn } from "react-icons/go";
import { FaUserPlus } from "react-icons/fa6";
import {  Link, NavLink } from "react-router-dom";

type Products ={
    name:string
    slug:string
    url:string
}

const navLinks = [
    {title:"Home", Link :"/"},
    {title:"About", Link :"/About"},
    {title:"Accessories", Link :"/Accessories"},
    {title:"Blog", Link :"/Blog"},
    {title:"Contact", Link :"/Contact"},
] 
// دى اللينكات الى فى النص فوق بس كتبتهم هنا واستخدمتهم تحت عشان لو حبيت اعدل عليهم

const BtmHeader = () => {
    const[product,setProduct]=useState<Products[]>([])
    const get_api = async()=>{
        try{
            const respon= await axios.get(
                "https://dummyjson.com/products/categories")
                setProduct(respon.data)

        }catch(err){
            console.log(err)
        }
    }
    get_api()

const [isList,setIsList]=useState(false)

  return (
    <header className="bg-primary flex items-center justify-between h-10">
      
        <nav className="flex items-center gap-48">

            <div className="h-full w-55 relative ml-32  ">

                <div className="flex justify-between items-center gap-2 cursor-pointer py-0 px-4 " onClick={()=>{setIsList(!isList)}}>
                    <IoIosMenu className="text-white" />
                    <p className="text-white font-bold">Browse Category</p>
                    <IoMdArrowDropdown className="text-white" />
                </div>

                <div className={`mt-2 absolute top-full left-0 w-full bg-[#dddddd] border border-gray-300 border-t-0 rounded-b-lg    flex flex-col overflow-y-auto transition-all duration-300  ${
                    isList ? "opacity-100 max-h-100" : "opacity-0 max-h-0"
                }`} >

                     {/* ${
                    isList ? "opacity-100 max-h-100" : "opacity-0 max-h-0"
                }`}  ده عشان يخفى الليست*/} 
                    
                    {product.map(product=>(
                        <NavLink className="px-3.5 py-2.5 text-sm border-b border-b-gray-50 text-primary " key={product.url} to={product.slug}>{product.name}</NavLink>
                    ))}
                </div>
                {/* دى بتاعة الـ dropdown الى جبناه من API */}

            </div>

            <div className="flex">
                {navLinks.map((item) => (
                    <NavLink className=" NavLink h-full flex items-center px-6 py-0 text-white hover:text-blue-300" key={item.title} to={item.Link}>{item.title}</NavLink>
                ))}
                {/* دى كده اللينكات الى فوق */}
            </div>
            
        </nav>

        <div className="flex items-center gap-3 mr-7">
            <Link className="text-white text-2xl" to={""} ><GoSignIn /></Link>
            <Link className="text-white mr-28 text-2xl" to={""}><FaUserPlus /></Link>
        </div>
      
    </header>
  )
}

export default BtmHeader
