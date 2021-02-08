import React from 'react';
import { GraphStyled, GraphTotal, GraphInfos } from './UserStatsGraphs.styled';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    if (data) {
      const graphData = data.map((item) => {
        return {
          x: item.title,
          y: Number(item.acessos),
        };
      });

      setTotal(
        data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b),
      );

      setGraph(graphData);
    }
  }, [data]);

  return (
    <GraphStyled>
      <GraphTotal>
        <p>Acessos: {total}</p>
      </GraphTotal>
      <GraphInfos>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, height: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </GraphInfos>
      <GraphInfos>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChart>
      </GraphInfos>
    </GraphStyled>
  );
};

export default UserStatsGraphs;
