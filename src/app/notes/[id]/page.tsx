export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const note = await params;

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold">{note.id}</h1>
        <p className="mt-2">Tittle: {note.id}</p>
        <p className="">Description for the {note.id} is ........</p>
      </div>
    </>
  );
}
