import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import JobList from "../pages/JobList";
import CompanyList from "../pages/CompanyList";
import JobseekerList from "../pages/JobseekerList";

export default function Section() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <GridColumn size={14}>
            <JobseekerList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={14}>
            <CompanyList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={14}>
            <JobList />
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}
