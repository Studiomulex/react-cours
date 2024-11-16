import logo from "../assets/logotest.png";
export default function Banner() {
  const title = "La maison de jungle";
  return (
    <div className="flex items-center justify-end text-gray-950 text-right p-[32px] border-b-2 border-black">
      <img
        src={logo}
        alt="maison_de_jungle_logo"
        className="w-[40px] h-[40px]"
      />
      <h1 className="text-3xl">{title}</h1>
    </div>
  );
}
