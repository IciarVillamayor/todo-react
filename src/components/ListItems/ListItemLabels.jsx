import React from "react";
import styled from "styled-components";

const LabelStyled = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ color }) => `${color}`};
`;


function ListItemLabels({ getData }) {
  console.log(getData.badges);
  let badges = getData.badges;



  console.log(Object.keys(badges));

  return (
    <div className="labels text-dark">
      <ul className="list-inline p-0 m-0 justify-content-end">

        {
          Object.values(badges).map((badge, k) => (
            <LabelStyled color={badge} className="list-inline-item m-n1"></LabelStyled>

          ))}
      </ul>
    </div>
  );
}

export default ListItemLabels;