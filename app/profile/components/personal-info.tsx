import React from 'react';

type Props = {};

export const PersonalInfo = (props: Props) => {
  return (
    <form className="mt-10 grid grid-cols-12 gap-x-4 gap-y-6 pb-12">
      <label className="col-span-12 min-[500px]:col-span-6" htmlFor="fullname">
        <b>Full name</b>
        <input
          className="w-full rounded-md border-[1px] border-slate-400 bg-white p-2 dark:bg-slate-800"
          placeholder="Full name"
          type="text"
          name="fullname"
          id=""
        />
      </label>
      <label className="col-span-12 min-[500px]:col-span-6" htmlFor="fullname">
        <b>Gender</b>
        <select
          className="w-full rounded-md border-[1px] border-slate-400 bg-white p-2 dark:bg-slate-800"
          name=""
          id=""
        >
          <option value="">Male</option>
        </select>
      </label>
      <label className="col-span-12 md:col-span-6" htmlFor="fullname">
        <b>Gender Email</b>
        <input
          className="w-full rounded-md border-[1px] border-slate-400 bg-white p-2 dark:bg-slate-800"
          placeholder="Email"
          type="text"
          name="fullname"
          id=""
        />
      </label>
      <div className="col-span-12 md:col-span-6">
        <b>Date of birth</b>
        <div className="col-span-6 grid grid-cols-1 gap-4 min-[500px]:grid-cols-6">
          <label className="col-span-2" htmlFor="fullname">
            <select
              className="w-full rounded-md border-[1px] border-slate-400 bg-white p-2 dark:bg-slate-800"
              name=""
              id=""
            >
              <option value="">1</option>
              <option value="">1</option>
              <option value="">1</option>
              <option value="">1</option>
            </select>
          </label>
          <label className="col-span-2" htmlFor="fullname">
            <select
              className="w-full rounded-md border-[1px] border-slate-400 bg-white p-2 dark:bg-slate-800"
              name=""
              id=""
            >
              <option value="">Janvary</option>
              <option value="">February</option>
              <option value="">February</option>
              <option value="">February</option>
            </select>
          </label>
          <label className="col-span-2" htmlFor="fullname">
            <select
              className="w-full rounded-md border-[1px] border-slate-400 bg-white p-2 dark:bg-slate-800"
              name=""
              id=""
            >
              <option value="">1990</option>
              <option value="">1991</option>
              <option value="">1992</option>
              <option value="">1993</option>
              <option value="">1994</option>
            </select>
          </label>
        </div>
      </div>
      <label className="col-span-12 min-[500px]:col-span-6" htmlFor="fullname">
        <b>Phone</b>
        <input
          className="w-full rounded-md border-[1px] border-slate-400 bg-white p-2 dark:bg-slate-800"
          placeholder="+998901234567"
          type="text"
          name="fullname"
          id=""
        />
      </label>
      <label className="col-span-12 min-[500px]:col-span-6" htmlFor="fullname">
        <b>Alternative phone</b>
        <input
          className="w-full rounded-md border-[1px] border-slate-400 bg-white p-2 dark:bg-slate-800"
          placeholder="+998901234567"
          type="text"
          name="fullname"
          id=""
        />
      </label>
      <label className="col-span-12 min-[500px]:col-span-4" htmlFor="fullname">
        <b>Facebook</b>
        <input
          className="w-full rounded-md border-[1px] border-slate-400 bg-white p-2 dark:bg-slate-800"
          placeholder="Facebook"
          type="text"
          name="fullname"
          id=""
        />
      </label>
      <label className="col-span-12 min-[500px]:col-span-4" htmlFor="fullname">
        <b>Instagram</b>
        <input
          className="w-full rounded-md border-[1px] border-slate-400 bg-white p-2 dark:bg-slate-800"
          placeholder="Instagram"
          type="text"
          name="fullname"
          id=""
        />
      </label>
      <label className="col-span-12 min-[500px]:col-span-4" htmlFor="fullname">
        <b>Twitter</b>
        <input
          className="w-full rounded-md border-[1px] border-slate-400 bg-white p-2 dark:bg-slate-800"
          placeholder="Twitter"
          type="text"
          name="fullname"
          id=""
        />
      </label>
    </form>
  );
};
