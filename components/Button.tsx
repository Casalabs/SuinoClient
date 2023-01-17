import { useWallet, ConnectModal } from "@suiet/wallet-kit";
import Image from "next/image";
import { useState } from "react";

function Button() {
  const [showModal, setShowModal] = useState(false);

  return (
    // wrap your own button as the trigger of the modal
    <ConnectModal open={showModal} onOpenChange={(open) => setShowModal(open)}>
      <Image
        src="/game/bet.png"
        width={470}
        height={80}
        alt="btn"
        className=" px-3 hover:translate-y-1 cursor-pointer"
      />
    </ConnectModal>
  );
}
export default Button;
