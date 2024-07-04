import Image from "next/image";

const Option = ({name, icon_path, href}: {name:string; icon_path:string, href:string}) => {
  return (
    <a href={href} className="flex items-center p-3 rounded-xl hover:bg-gray-200">
      <Image
        src={icon_path}
        alt="Dashboard Icon"
        width={28}
        height={28}
        className="h-7 mr-2 w-7 "
      />
      <span className="text-gray-900">{name}</span>
    </a>
  );
};

export default Option;
