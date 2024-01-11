import React from 'react';

import { specificatorTypes } from './items';

type Props = {};

export const Specificator = (props: Props) => {
  return (
    <div>
      {specificatorTypes.map((e, i) => (
        <div className="mb-6 mt-12" key={i}>
          <h3 className="my-4 text-[25px] font-bold">{e.item_title}</h3>
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: '40%' }}></th>
                <th style={{ width: '60%' }}></th>
              </tr>
            </thead>
            <tbody>
              {e.items.map((e, i) => (
                <tr key={i}>
                  <td className="bg-100 align-middle">
                    <h6 className="text-900 text-uppercase fw-bolder lh-sm mb-0 bg-slate-200 px-4 py-4">
                      {e.key}
                    </h6>
                  </td>
                  <td className="mb-0 px-5">{e.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      {/* {specificatorTypes.map((e, i) => (
        <div key={i}>
          <h1 className="text-[25px] font-bold">{e.item_title}</h1>
          <ul>
            {e.items.map((e, i) => (
              <li key={i}>
                <span className="w-[100px] bg-slate-600">{e.key}</span>
                <span>{e.value}</span>
              </li>
            ))}
          </ul>
        </div>
      ))} */}
    </div>
  );
};
