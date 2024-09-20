import Image from "next/image";
import Link from "next/link";
import { Icon } from "./icons";

const DoctorCard = ({
  name,
  doctorId,
  speciality,
  location,
}: Readonly<{
  name: string;
  doctorId: string;
  speciality: string;
  location: string;
}>) => {
  return (
    <Link
      href={`doctor/${doctorId}`}
      className="border border-gray-200 p-4 rounded-xl gap-3 inline-flex flex-col w-full max-w-[150px]"
    >
      <Image
        src={`/photos/photo-${doctorId}.jpg`}
        alt={name}
        width={76}
        height={76}
        className="rounded-lg"
      />
      <div className="flex flex-col">
        <h3 className="font-semibold truncate">{name}</h3>
        <p className="text-sm text-gray-400">{speciality}</p>
      </div>
      <p className="flex items-center gap-1 text-sm truncate ">
        <Icon name="location" className="w-4 h-4 text-[#FFBB63]" />
        {location}
      </p>
    </Link>
  );
};

export default DoctorCard;
