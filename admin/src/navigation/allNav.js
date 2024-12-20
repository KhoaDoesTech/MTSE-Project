import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaUserTimes, FaUsers } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { FaCodePullRequest } from "react-icons/fa6";
import { IoIosChatbubbles } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { MdViewList } from "react-icons/md";
import { TbBasketDiscount } from "react-icons/tb";
import { BsCartCheck } from "react-icons/bs"; 
import { IoChatbubbles } from "react-icons/io5";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export const allNav = [
    {
        id : 1,
        title : 'Dashboard',
        icon : <AiOutlineDashboard />,
        role : 'admin',
        path: '/admin/dashboard'
    },
    {
        id : 2,
        title : 'Orders',
        icon : <AiOutlineShoppingCart />,
        role : 'admin',
        path: '/admin/dashboard/orders'
    },
    {
        id : 3,
        title : 'Category',
        icon : <BiCategory  />,
        role : 'admin',
        path: '/admin/dashboard/category'
    },
    {
        id : 4,
        title : 'Payment Request',
        icon : <MdPayment />,
        role : 'admin',
        path: '/admin/dashboard/payment-request'
    },
    {
        id : 5,
        title : 'Live Chat',
        icon : <IoIosChatbubbles />,
        role : 'admin',
        path: '/admin/dashboard/chat-sellers'
    },
    {
        id : 6,
        title : 'Dashboard',
        icon : <AiOutlineDashboard />,
        role : 'seller',
        path: '/seller/dashboard'
    },
    {
        id : 7,
        title : 'Add Product',
        icon : <IoMdAdd />,
        role : 'seller',
        path: '/seller/dashboard/add-product'
    },     
    {
        id : 8,
        title : 'All Product',
        icon : <MdViewList />,
        role : 'seller',
        path: '/seller/dashboard/products'
    },
    {
        id : 9,
        title : 'Payments',
        icon : <MdPayment />,
        role : 'seller',
        path: '/seller/dashboard/payments'
    },
    {
        id : 10,
        title : 'Chat-Customer',
        icon : <IoChatbubbles />,
        role : 'seller',
        path: '/seller/dashboard/chat-customer'
    },
    {
        id : 11,
        title : 'Chat-Support',
        icon : <BsFillChatQuoteFill />,
        role : 'seller',
        path: '/seller/dashboard/chat-support'
    },
    {
        id : 12,
        title : 'Profile',
        icon : <CgProfile />,
        role : 'seller',
        path: '/seller/dashboard/profile'
    }
]