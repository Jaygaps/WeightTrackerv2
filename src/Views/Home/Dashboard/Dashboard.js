import React from "react";
import styled from "styled-components";

import Graph from "../Components/Graph";

const DashboardWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

const Container = styled.div`
  padding: 24px;
`;

const TopNav = styled.div`
  display: flex;
`;

const TopNavTitle = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 20px;
  flex: 1;
`;

const TopNavInfo = styled.div`
  background: white;
  padding: 8px;
  border-radius: 8px;
  margin-left: 8px;
`;

const HighlightContainer = styled.div`
  display: flex;
  margin: 24px 0;
`;

const Highlight = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4px;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid #e8e8e8;
  background: #fafafb;
  padding: 16px;
`;

const HighlightTitle = styled.p`
  margin: 0;
`;

const HighlightData = styled.p`
  margin: 0;
  font-size: 42px;
  font-weight: 600;

  span {
    font-size: 20px;
    font-weight: 500;
    color: #333;
  }
`;

function Dashboard({ userData, userStatus }) {
  const startDate = new Date(userData.startDate);
  const endDate = new Date(userData.endDate);
  const today = new Date();

  const DaysBeen = Math.round(
    (today.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
  );

  const DaysRemaining = Math.round(
    (endDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
  );

  const WeeksRemaing = Math.round(
    (endDate.getTime() - today.getTime()) / (1000 * 3600 * 24 * 7)
  );

  const dailyWeightIncrease =
    Math.round(
      ((userData.goalWeight - userData.initialWeight) /
        (DaysBeen + DaysRemaining)) *
        100000
    ) / 100000;

  return (
    <DashboardWrapper>
      {userData && userStatus === "SUCCESS" && (
        <Container>
          <TopNav>
            <TopNavTitle>Welcome JayGaps</TopNavTitle>
            <TopNavInfo>
              Initial Weight: <b>{userData.initialWeight}</b>
            </TopNavInfo>
            <TopNavInfo>
              <b>{DaysBeen}</b> days been
            </TopNavInfo>
          </TopNav>
          <HighlightContainer>
            <Highlight>
              <HighlightTitle>Current Weight</HighlightTitle>
              <HighlightData>
                {userData.weights[userData.weights.length - 1].weight}{" "}
                <span>KGS</span>
              </HighlightData>
            </Highlight>
            <Highlight>
              <HighlightTitle>Goal Weight</HighlightTitle>
              <HighlightData>
                {userData.goalWeight} <span>KGS</span>
              </HighlightData>
            </Highlight>
            <Highlight>
              <HighlightTitle>Days Remaining</HighlightTitle>
              <HighlightData>{DaysRemaining}</HighlightData>
            </Highlight>
            <Highlight>
              <HighlightTitle>Weight Remaining</HighlightTitle>
              <HighlightData>
                {Math.round(
                  (userData.goalWeight -
                    userData.weights[userData.weights.length - 1].weight) *
                    100
                ) / 100}
                <span>KGS</span>
              </HighlightData>
            </Highlight>
          </HighlightContainer>
          <HighlightContainer>
            <Highlight>
              Weight expected:&nbsp;
              {Math.round(dailyWeightIncrease * userData.initialWeight * 1000) /
                100}{" "}
              KGS
            </Highlight>
            <Highlight>
              Weight changed:&nbsp;
              {Math.round(
                (userData.weights[userData.weights.length - 1].weight -
                  userData.initialWeight) *
                  100
              ) / 100}{" "}
              KGS
            </Highlight>
            <Highlight>Weeks remaining:&nbsp;{WeeksRemaing}</Highlight>
          </HighlightContainer>
          <Graph userData={userData} userStatus={userStatus} />
        </Container>
      )}
    </DashboardWrapper>
  );
}

export default Dashboard;
