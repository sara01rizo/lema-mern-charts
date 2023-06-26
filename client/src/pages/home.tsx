import React from 'react'
import { useList } from '@pankod/refine-core';
import {
  PieChart,
  PropertyReferrals,
  PropertyCard,
  TotalRevenue,
  TopAgent
} from 'components'
import { Typography, Box, Stack } from '@pankod/refine-mui';

const home = () => {
  return (
    <Box>
      <Stack>
        <Typography fontSize={25} fontWeight={700} color="#11142D">
          Dashboard
        </Typography>

        <Box mt="20px"
          display="flex"
          flexWrap="wrap"
          gap={4}
        >
          <PieChart
            title="Properties for sale"
            value={684}
            series={[75, 25]}
            colors={['#475be8', '#e4e8ef']}
          />
          <PieChart
            title="Properties for rent"
            value={550}
            series={[75, 25]}
            colors={['#475ae8', '#e4b8ef']}
          />
          <PieChart
            title="Total customers"
            value={684}
            series={[75, 25]}
            colors={['#478be8', '#e4h8ef']}
          />
          <PieChart
            title="Properties for Cities"
            value={684}
            series={[75, 25]}
            colors={['#485be8', '#e5e8ef']}
          />
          Charts
        </Box>

        <Stack mt="25px" width="100%" direction={{ xs:'column', lg: 'row'}} gap={4}>
          <TotalRevenue />
          <PropertyReferrals />
        </Stack>

      </Stack>
    </Box>
  )
}

export default home;
