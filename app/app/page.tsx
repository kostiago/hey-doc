import { Icon } from "@/components/icons";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Icon name="eye" className="w-4 h-4" />
      <Icon
        name="location"
        className="w-4 h-4"
        childrenClassName="text-sm text-red-400"
      >
        Aqui
      </Icon>
    </>
  );
}
