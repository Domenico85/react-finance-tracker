import { Table } from "react-bootstrap";

const Transactions = () => {
  return (
    <div>
      <h2 className="mb-4">Transactions</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2025-02-19</td>
            <td>Groceries</td>
            <td>$50</td>
            <td>Food</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Transactions;
