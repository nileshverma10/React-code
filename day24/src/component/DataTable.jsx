import Table from "react-bootstrap/Table";

function DataTable(props) {
  console.log("props", props.apiData);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.NO</th>
          <th> Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {props.apiData.map((e, i) => {
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{e.name}</td>
              <td>{e.username}</td>
              <td>{e.email}</td>
              <td>{e.address.city}</td>
            </tr>
          );
        })}
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default DataTable;
