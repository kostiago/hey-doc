import DoctorCard from "@/components/doctorCard";
import Header from "@/components/header";
import { Icon } from "@/components/icons";
import ShedulingCard from "@/components/schedulingCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const schedulings = [
    { title: "Agendamento Hoje", time: "10:00", description: "Clínico Geral" },
    {
      title: "Agendamento Amanhã",
      time: "10:00",
      description: "Clínico Geral",
    },
  ];

  const doctors = [
    {
      name: "Dr. João Silva",
      doctorId: "1",
      speciality: "Clínico Geral",
      location: "São Paulo",
    },
    {
      name: "Dra. Maria Souza",
      doctorId: "2",
      speciality: "Cardiologista",
      location: "Rio de Janeiro",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <Header href="/sign-in" iconName="edit" iconZize="w-4 h-4">
        <div className="inline-flex gap-[10px] items-center">
          <Image src="/logo.svg" alt="hey doc" width={48} height={48} />
          <span className="font-bold text-3xl">HEY DOC</span>
        </div>
      </Header>

      <h1 className="font-bold text-xl">
        Assistente pessoal{" "}
        <span className="w-full flex">para agendamento de consultar</span>
      </h1>

      <div className="flex flex-col gap-2">
        <div className="flex w-full gap-4">
          {schedulings.map((scheduling, index) => (
            <ShedulingCard
              key={index}
              title={scheduling.title}
              time={scheduling.time}
              description={scheduling.description}
            />
          ))}
        </div>

        <div className="inline-flex">
          <Link
            href="/sign-in"
            className="bg-green-500 text-white text-sm px-2 py-2 pr-3 inline-flex gap-2 items-center rounded-2xl"
          >
            <span className="bg-white text-green-500 w-5 h-5 font-semibold text-xs items-center justify-center flex rounded-full">
              3
            </span>
            Meus agedamentos
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-lg">Médicos disponiveis</h2>
          <div className="flex justify-between">
            {doctors.map((doctor) => (
              <DoctorCard
                key={doctor.doctorId}
                name={doctor.name}
                doctorId={doctor.doctorId}
                speciality={doctor.speciality}
                location={doctor.location}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
