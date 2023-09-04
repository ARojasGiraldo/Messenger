"use client";

import clsx from "clsx";
import EmtyState from "../components/EmtyState";
import useConversation from "../hooks/useConversation";

const Home = () => {
  const { isOpen } = useConversation();

  return (
    <div
      className={clsx("lg:pl-80 h-full lg:block", isOpen ? "block" : "hidden")}
    >
      <EmtyState />
    </div>
  );
};

export default Home;
