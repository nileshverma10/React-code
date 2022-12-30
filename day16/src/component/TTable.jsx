import Table from "react-bootstrap/Table";
import "./TTable.css";

function TTable(props) {
  // console.log("data", props.data);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Full Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Password</th>
          <th>University</th>
          <th>Department</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((e, i) => {
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{e.fullname}</td>
              <td>{e.gender}</td>
              <td> {e.age}</td>
              <td>{e.password}</td>
              <td>{e.university}</td>
              <td>{e.department}</td>
              <td>{e.email}</td>
              <td>{e.phone}</td>
            </tr>
          );
        })}
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
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

export default TTable;
