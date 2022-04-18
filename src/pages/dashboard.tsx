import dynamic from 'next/dynamic';

import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { ApexOptions } from 'apexcharts';
import { Card } from '../components/Card';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});


const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-24T00:00:00.000Z',
    ]
  }
} as const

const series = [
  {
    name: 'series1',
    data: [31, 120, 10, 28, 61, 18, 109]
  }
];
export default function dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex
        w="100%"
        my="6"
        maxW={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />


        <SimpleGrid flex="1" gap="4" minChildWidth={320} alignItems="flex-start">
          <Card title="Inscritos da semana">
            <Chart
              type="area"
              height={160}
              options={options}
              series={series}
            />
          </Card>
          <Card title="Taxa de abertura">
            <Chart
              type="area"
              height={160}
              options={options}
              series={series}
            />
          </Card>
          
        </SimpleGrid>
      </Flex>
    </Flex>

  );
}