type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex max-h-4 items-center">
      {picture != null && (
        <img
          src={picture}
          className="w-8 h-8 rounded-full my-4 mr-4"
          alt={name}
        />
      )}
      <div className="text-lg">{name}</div>
    </div>
  );
};

export default Avatar;
