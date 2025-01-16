import React from 'react';
import ChartFive from '../../components/Charts/ChartFive';
import ChartSix from '../../components/Charts/ChartSix';
import PriceHistoryChart from '../../components/Charts/PriceHistoryChart.tsx';
import ExternalLink from '../../components/ExternalLink';
import FeaturedCampaigns from '../../components/FeaturedCampaigns';
import Feedback from '../../components/Feedback';
import TableFour from '../../components/Tables/TableFour';
import DefaultLayout from '../../layout/DefaultLayout';

const SingleStock: React.FC = () => {
  return (
    <DefaultLayout>
        <PriceHistoryChart />

      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <TableFour />
        <ChartFive />
        <ExternalLink />
        <div className="col-span-12 xl:col-span-7">
          <ChartSix />
        </div>
        <FeaturedCampaigns />
        <Feedback />
      </div>
    </DefaultLayout>
  );
};

export default SingleStock;
