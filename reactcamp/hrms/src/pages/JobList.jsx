import React, { useState, useEffect } from "react";
import { Table, Button, Header, Icon } from "semantic-ui-react";
import JobService from "../services/jobService";

export default function JobAdvertList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let jobService = new JobService();
    jobService
      .getJobs()
      .then((result) => setJobs(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h2">
        <Icon name="list alternate outline" />
        <Header.Content>Job List</Header.Content>
      </Header>
      <Table color="blue" key="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Title</Table.HeaderCell>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Open Position</Table.HeaderCell>
            <Table.HeaderCell>Deadline</Table.HeaderCell>
            <Table.HeaderCell>Is Open</Table.HeaderCell>
            <Table.HeaderCell>Detail</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobs.map((job) => (
            <Table.Row key={job.id}>
              <Table.Cell>{job.jobPosition.jobTitle}</Table.Cell>
              <Table.Cell>{job.company.companyName}</Table.Cell>
              <Table.Cell>{job.city.name}</Table.Cell>
              <Table.Cell>{job.openPosition}</Table.Cell>
              <Table.Cell>{job.deadline}</Table.Cell>
              <Table.Cell>{job.open.toString()}</Table.Cell>
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