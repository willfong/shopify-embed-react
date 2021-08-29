import { Page, Card, Button } from '@shopify/polaris';
import createApp from "@shopify/app-bridge";
import { getSessionToken } from "@shopify/app-bridge-utils";

const getShopifySessionToken = async () => {
  const config = { apiKey: '856c68dd4d82ce02b52f0cd5f0f4132b', host: 'd2lsbGYtc2hvcC5teXNob3BpZnkuY29tL2FkbWlu' };
  const app = createApp(config);
  const sessionToken = await getSessionToken(app);
  console.log(sessionToken);
  return sessionToken;
}

function App() {
  getShopifySessionToken();
  return (
    <Page title="Example app">
      <Card sectioned>
        <Button onClick={() => alert('Button clicked!')}>Example button</Button>
      </Card>
    </Page>

  );
}

export default App;
