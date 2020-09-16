import React from "react";
import styled from "styled-components";

const DashboardWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

const Container = styled.div`
  padding: 24px;
`;

function Dashboard() {
  const startDate = new Date("09/16/2019");
  const endDate = new Date("12/31/2020");
  const today = new Date();

  const Difference_In_Time = endDate.getTime() - today.getTime();
  const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  return (
    <DashboardWrapper>
      <Container>
        Dashboard
        {Math.round(Difference_In_Days)} days
      </Container>
    </DashboardWrapper>
  );
}

export default Dashboard;
