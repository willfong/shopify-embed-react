import React from 'react'
import { CalloutCard, DisplayText, Page, Stack } from '@shopify/polaris'

import { ClientResponse } from './api'

interface Props {
  client: ClientResponse
}

const App = ({ client }: Props) => {
  let activeText = ''

  if (client?.active) {
    activeText = 'active 🚀'
  }

  if (!client?.active) {
    activeText = 'inactive 🚨'
  }

  return (
    <Page>
      <Stack vertical>
        <DisplayText size="large">Your Referral Program is { activeText } </DisplayText>
        <CalloutCard
          title="Boost your referral rate"
          illustration="https://s3.ap-southeast-1.amazonaws.com/cdn.referralcandy.com/images/shopify-embedded-app/stats.png"
          primaryAction={{
            content: 'View Referral Sales',
            url: 'https://my.referralcandy.com/analytics'
          }}
        >
          <p>The industry average referral rate is 2.56%. Promote more to boost your referral rate</p>
        </CalloutCard>
        <CalloutCard
          title="Improve your store reach"
          illustration="https://s3.ap-southeast-1.amazonaws.com/cdn.referralcandy.com/images/shopify-embedded-app/email.png"
          primaryAction={{
            content: 'Email Past Customers',
            url: 'https://my.referralcandy.com/in_app_invite'
          }}
        >
          <p>Increase the number of people who know about your program</p>
        </CalloutCard>
      </Stack>
    </Page>
  )
}

export default App