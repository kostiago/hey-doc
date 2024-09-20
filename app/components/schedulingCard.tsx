const ShedulingCard = ({
  title,
  time,
  description,
  children,
}: Readonly<{
  title?: string;
  time: string;
  description: string;
  children?: React.ReactNode;
}>) => {
  const classNameDefault = "bg-[#3D8378] inline-flex p-3 rounded-xl";
  return (
    <div className={classNameDefault}>
      <div className="text-white">
        {children || (
          <>
            <h2 className="font-semibold">{title}</h2>
            <p className="text-sm truncate w-32">
              {time} - {description}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ShedulingCard;
