import {BsInstagram,BsTwitter,BsPinterest} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'


const Footer = () => {
  return (
   <footer className='bg-black py-12'>
<div className="top-footer flex gap-4 justify-between px-14 py-4">

<div className="item1 bg-black text-white">
  <h1 className='text-gray-500 font-bold uppercase pb-8'>Company</h1>
  <ul className='flex  flex-col gap-4'>
    <li><a href="">About Us</a></li>
    <li><a href="">Teams</a></li>
    <li><a href="">Careers</a></li>
    <li><a href="">Swiggy Blob</a></li>
    <li><a href="">Bug Bounty</a></li>
    <li><a href="">Swiggy One</a></li>
    <li><a href="">Swiggy Corporate</a></li>
    <li><a href="">Swiggy Instamart</a></li>
    <li><a href="">Swiggy Genie</a></li>
  </ul>
</div>

<div className="item2 bg-black text-white">
  <h1 className='text-gray-500 font-bold uppercase pb-8'>Contact</h1>
  <ul className='flex flex-col gap-4'>
    <li><a href="">Help & Support</a></li>
    <li><a href="">Parter with us</a></li>
    <li><a href="">Ride with us</a></li>
   
  </ul>
</div>

<div className="item3 bg-black text-white">
  <h1 className='text-gray-500 font-bold uppercase pb-8' >LEGAL</h1>
  <ul className='flex flex-col gap-4'>
  


<li><a href="">Terms & Conditions</a></li>

<li><a href="">Refund & Cancellation</a></li>

<li><a href="">Privacy Policy</a></li>

<li><a href="">Cookie Policy</a></li>
<li><a href="">Offer Terms</a></li>

<li><a href="">Phishing & Fraud</a></li>
<li><a href="">Corporate – Swiggy Money Codes Terms and Conditions</a></li>

<li><a href="">Corporate - Swiggy Discount Voucher Terms and Conditions</a></li>   
  </ul>
</div>


<div className="item4 flex flex-col gap-8 ">

<a href="" className='border border-gray-500 rounded-lg'><img className="w-52" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp" alt="btn02"/></a>
<a href="" className='border border-gray-500 rounded-lg'><img className="w-52" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty" alt="btn02" /></a>

    </div>



</div>



<hr className=' w-full   bg-gray-400'/>

<div className='bottom-footer flex flex-wrap gap-4 pt-8 px-14 justify-between items-center bg-black text-white '>

<div className="logo"><img src="https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg" alt="" className="w-full h-12"/></div>
<div className="copyright text-xl">
  &copy;2023 Swiggy
</div>
<ul className="links flex gap-8 text-2xl">
  <li><a href=""><FaFacebookF/></a></li>
  <li><a href=""><BsPinterest/></a></li>
  <li><a href=""><BsInstagram/></a></li>
  <li><a href=""><BsTwitter/></a></li>
</ul>

    </div>
   </footer>
  )
}
export default Footer