import Link from "next/link";
const getData = async () => {
  const req = await fetch("https://json-api.uz/api/project/tickets-farxod/tickets", {
    next: {
      revalidate: 0,
    },
  });
  const data = await req.json();

  return { data };
};

async function TicketList() {
  const { data } = await getData();
  return (
    <div>
      <div className="flex justify-between mb-20">
        <div>
          <h1 className="text-primary">Tickets</h1>
          <p className="text-slate-500 text-sm">Currently open tickets.</p>
        </div>
        <div>
          <Link href="/form" className="bg-primary py-2 px-3 text-white">
            New Ticket
          </Link>
        </div>
      </div>
      {data.data.map((ticket) => {
        return (
          <div key={ticket.id}>
            <div className="card my-5">
              <Link href={`/singleTicket/${ticket.id}`}>
                <h2>{ticket.title}</h2>
                <p>{ticket.body.slice(200)}</p>
                <div className={`pill ${ticket.priority}`}>
                  {ticket.priority} priority
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TicketList;
