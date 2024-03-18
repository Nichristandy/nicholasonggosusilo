const Card = ({ src, alt, name, desc }) => {
  return (
    <>
      {" "}
      <div className="border-[2px] border-khaki w-full hover:bg-ebony  text-black hover:text-cream cursor-pointer">
        <img
          src={src}
          alt={alt}
          className="w-full border-b-[2px] border-khaki"
        />
        <div className="w-full flex justify-between items-end font-monument border-box px-4 pt-4 pb-2">
          <h2 className="text-[32px] font-black uppercase">{name}</h2>
          <p className="text-lg uppercase">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
