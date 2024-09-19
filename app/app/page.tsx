import Header from "@/components/header";
import { Icon } from "@/components/icons";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header title="Inicio" href="/sign-in" iconName="edit" iconZize="w-4 h-4">
        <div className="inline-flex gap-[10px] items-center">
          <Image src="/logo.png" alt="hey doc" width={48} height={48} />
          <span>HEY DOC</span>
        </div>
      </Header>
      <h1>Home</h1>
    </>
  );
}
