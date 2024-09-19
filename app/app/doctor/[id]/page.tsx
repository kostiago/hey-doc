export default function Doctor({
  params,
}: Readonly<{ params: { id: String } }>) {
  return <h1>Doctor {params.id} </h1>;
}
