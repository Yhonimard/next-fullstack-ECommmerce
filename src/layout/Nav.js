import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { isAuth } from "../redux/GlobalState";
import { CartIcon } from "../assets/Icon";
import Cookies from "js-cookie";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";

const Nav = () => {
  const { isLogin } = useSelector((state) => state.global);

  const router = useRouter();
  const dispatch = useDispatch();

  const handleNavigate = () => {
    router.push("/auth/login");
  };

  const logoutHandler = () => {
    Cookies.remove("token");
    dispatch(isAuth(false));
  };

  return (
    <div className="w-full h-14 px-8 items-center flex justify-between shadow-md ">
      <h6 className="font-semibold text-lg">YHONIMARD</h6>
      <div className="flex items-center gap-6">
        <Menu as="div" className="relative mt-[7px]">
          <Menu.Button>
            <div className="relative flex">
              <CartIcon className={"cursor-pointer flex-1"} />
              <span className="absolute p-0 m-0 -right-2 -top-[4px] rounded-full  bg-gray-500 w-4 h-4 text-center text-xs text-white">
                5
              </span>
            </div>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute bg-white divide-y top-12 right-1 rounded w-72 h-80 shadow-md overflow-y-auto">
              <div className="px-4 py-2 flex flex-row justify-between">
                <h6>my cart (10)</h6>
                <Link
                  href="/my-cart"
                  className="hover:scale-105 transition-all text-blue-700 underline"
                >
                  see all cart
                </Link>
              </div>
              <Menu.Item
                as="div"
                className="cursor-pointer transition-all flex flex-row justify-between  items-center hover:bg-gray-300 px-4 py-2"
              >
                <Image
                  src="https://source.unsplash.com/100x100"
                  width={35}
                  height={35}
                  loader={({ src }) => src}
                  unoptimized
                  alt="product"
                  className="object-cover"
                />
                <div className="flex flex-col w-1/2 ">
                  <h6 className="text-sm truncate">
                    product title testing testing testing
                  </h6>
                  <h6 className="text-xs">Quantity : 10</h6>
                </div>

                <h5>$40</h5>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>

        <Menu as="div" className="relative">
          <Menu.Button className="mt-1">
            <Image
              src="http://source.unsplash.com/300x300"
              width={300}
              height={300}
              loader={({ src }) => src}
              alt="user"
              className="w-7 h-7 rounded-full cursor-pointer"
            />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute bg-white right-0 top-12 shadow-md rounded-md overflow-hidden divide-y">
              <Menu.Item
                as="div"
                className="cursor-pointer px-4 py-2 hover:bg-gray-200 transition duration-300 text-base font-normal"
              >
                settings
              </Menu.Item>
              <Menu.Item
                as="div"
                className="cursor-pointer px-4 py-2 hover:bg-gray-200 transition duration-300 text-base font-normal"
              >
                account
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Nav;
