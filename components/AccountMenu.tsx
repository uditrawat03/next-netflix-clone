import React from "react";
import { signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";

interface AccountMenuProps {
  visible: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  const {data} = useCurrentUser();

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img
            className="rounded-md w-8"
            src="/images/default-user-image.png"
            alt=""
          />
          <p className="text-white text-sm group-hover/item:underline">
            {data?.name}
          </p>
        </div>
        <hr className="bg-gray-800 border-0 h-px my-4" />
        <div onClick={() => signOut()} className="px-3 text-center text-white text-sm hover:underline">
          Sign out of ott-platform
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;