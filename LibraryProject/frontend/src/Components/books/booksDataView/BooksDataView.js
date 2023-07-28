import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import BooksEdit from "../booksEdit/BooksEdit";
import Librarian from "../../../Pages/librarian/Librarian";
import BooksDelete from "../booksDelete/BooksDelete";
const BooksDataView = (probs) => {
  //alert(probs.appUser);
  const tableData = probs.tableData;

  const arrayChecker = (data) => {
    if (Array.isArray(data)) {
      console.log("Data is an array");
      console.log(data);
      const mappedData = data.map((item) => {
        console.log("ID:", item.id);
        console.log("Name:", item.name);
        console.log("Availability:", item.avalablity);
        console.log("Lender:", item.lender);
        console.log("---------------");
      });

      // Process data as an array
    } else {
      console.log("Data is not an array");
      console.log(data);
    }
  };
  //arrayChecker(tableData);
  return (
    <>
      <Table striped bordered hover>
        <thead className="text-center">
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Availability</th>
            <th>Lender</th>
            {probs.appUser == "librarian" && (
              <>
                <th>Edit</th>
                <th>Delete</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr className="text-center">
              <td>{data.name}</td>
              <td>{data.id}</td>

              <td>{data.availability ? "Available" : "Not Available"}</td>
              <td>{data.lender}</td>

              {probs.appUser == "librarian" && (
                <>
                  <td>
                    <BooksEdit EditData={data} />
                  </td>
                  <td>
                    <BooksDelete EditData={data} />
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default BooksDataView;
