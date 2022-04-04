import React from "react";

const Table = ({ data}) => {
  return (
    <main id="mainAboutUs">
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ارزش ها</th>
              <th scope="col">توضیحات</th>
            </tr>
          </thead>
          <tbody>
            {data.map((option) => (
              <tr key={option.id}>
                <td>{option.title}</td>
                <td>{option.desc}</td>
              </tr>
            ))}
            ;
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Table;
