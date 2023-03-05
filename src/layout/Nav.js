import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { isAuth } from "../redux/GlobalState";
import { CartIcon } from "../assets/Icon";
import Cookies from "js-cookie";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

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
      <div className="flex items-center gap-4">
        <CartIcon className={"cursor-pointer"} />

        <Menu as="div" className="relative">
          <Menu.Button>
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
            <Menu.Items className="absolute bg-white right-10 top-12 shadow-md rounded-md overflow-hidden">
              <Menu.Item
                as="div"
                className="cursor-pointer px-4 py-2 hover:bg-gray-200 transition duration-300 text-base font-normal"
              >
                testing
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Nav;
