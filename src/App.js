import { Page, Card, Button } from '@shopify/polaris';

function App() {
  return (
    <Page title="Example app">
      <Card sectioned>
        <Button onClick={() => alert('Button clicked!')}>Example button</Button>
      </Card>
    </Page>

  );
}

export default App;
