"use client";

import { useRouter } from "next/navigation";

function Form() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const body = formData.get("body");
    const user_email = formData.get("user_email");
    const priority = formData.get("priority");
    const url = "https://json-api.uz/api/project/tickets-farxod/tickets";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title, body, priority, user_email }),
    }).then(() => {
      alert("Success!");
      window.location.reload();
      e.target.reset();
      router.push("/ticketList");
    });
  };

  return (
    <div className="w-full py-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full"
      >
        <div className="flex flex-col gap-2 w-full text-center">
          <label className="px-5 text-lg font-semibold" htmlFor="title">
            Title :{" "}
          </label>
          <input
            required
            name="title"
            className="py-2 mb-3 px-3 mx-auto focus:border-none rounded-[25px] w-full max-w-[350px]"
            type="text"
            id="title"
          />
        </div>
        <div className="flex flex-col gap-2 w-full text-center">
          <label className="px-5 text-lg font-semibold" htmlFor="author">
            Body :{" "}
          </label>
          <input
            required
            name="body"
            className="py-2 mb-3 px-3 mx-auto focus:border-none rounded-[25px] w-full max-w-[350px]"
            type="text"
            id="body"
          />
        </div>
        <div className="flex flex-col gap-2 w-full text-center">
          <label className="px-5 text-lg font-semibold" htmlFor="URL">
            User_email :{" "}
          </label>
          <input
            required
            name="user_email"
            className="py-2 mb-3 px-3 mx-auto focus:border-none rounded-[25px] w-full max-w-[350px]"
            type="text"
            id="userEmail"
          />
        </div>
        <div className="flex flex-col gap-2 w-full text-center">
          <label className="px-5 text-lg font-semibold" htmlFor="URL">
            Priority :{" "}
          </label>
          <input
            required
            name="priority"
            className="py-2 mb-3 px-3 mx-auto focus:border-none rounded-[25px] w-full max-w-[350px]"
            type="text"
            id="priority"
          />
        </div>
        <div>
          <button className="mb-7 py-2 px-10 rounded-3xl text-white font-semibold  bg-primary">
            Creat
          </button>
        </div>
      </form>
      <hr className="border border-black mb-2" />
    </div>
  );
}

export default Form;
