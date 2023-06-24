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
      <Typography fontSize={25} fontWwight={700} color="#11142D">
        Dashboard
      </Typography>

    </Box>
  )
}

export default home;
