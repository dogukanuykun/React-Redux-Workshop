import React, { useState, useEffect } from "react";
import { Table, Header, Icon, Button } from "semantic-ui-react";
import CompanyService from "../services/companyService";

export default function EmployerList() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let companyService = new CompanyService();
    companyService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h2">
        <Icon name="list alternate outline" />
        <Header.Content>Company List</Header.Content>
      </Header>
      <Table color="blue" key="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Website</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Phone Number</Table.HeaderCell>
            <Table.HeaderCell>Detail</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employers.map((company) => (
            <Table.Row key = {company.id}>
              <Table.Cell>{company.companyName}</Table.Cell>
              <Table.Cell>{company.website}</Table.Cell>
              <Table.Cell>{company.email}</Table.Cell>
              <Table.Cell>{company.phoneNumber}</Table.Cell>
              <Table.Cell>
                <Button>View</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}