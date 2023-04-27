import Image from "next/image";
type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => (
  <div className="flex max-h-4 items-center">
    {picture != null && (
      <Image
        src={picture}
        className="w-8 h-8 rounded-full my-4 mr-4"
        alt={name}
        height={48}
        width={48}
      />
    )}
    <div className="text-lg">{name}</div>
  </div>
);

export default Avatar;
