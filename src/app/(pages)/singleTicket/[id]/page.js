"use client";
import Link from "next/link";
import { BiSolidMinusCircle } from "react-icons/bi";
import { Navigate } from "react-router-dom";

const handlDelete = (id) => {
  const url = `http://localhost:4000/tickets/${id}`;

  fetch(url, {
    method: "DELETE",
  })
    .then(() => {
      alert("Book deleted successfully!");
      <Navigate to="/ticketList" replace={true} />;
      window.location.reload();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const getData = async (id) => {
  const req = await fetch("http://localhost:4000/tickets/" + id);
  const data = await req.json();

  return { data };
};

async function singleTicket({ params }) {
  const { data } = await getData(params.id);

  return (
    <div>
      <h1>Ticket Details</h1>
      <div className="card">
        <div className=" flex justify-end">
          <button
            onClick={() => handlDelete(params.id)}
            className="text-black hover:text-red-600"
          >
            <BiSolidMinusCircle className=" w-5 h-5" />
          </button>
        </div>
        <h2>{data.title}</h2>
        <small>Created by {data.user_email}</small>
        <p>{data.body}</p>
        <div className={`pill ${data.priority} `}>"low" {data.priority}</div>
      </div>
    </div>
  );
}

export default singleTicket;
