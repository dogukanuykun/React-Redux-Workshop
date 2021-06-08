import React from "react";
import { Grid } from "semantic-ui-react";
import SideBar from "./SideBar";
import Categories from "./Categories";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <SideBar/>
          </Grid.Column>
          <Grid.Column width={14}>
              <Categories/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
