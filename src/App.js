import Home from './components/Home';
import Header from './components/Header';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Form from './components/Form';
import Input from './components/Input';

function App() {
  return (
    <Home grid="grid-auto-rows-max-content">
      <Header className="header" grid="grid-auto-rows-max-content-1fr" rows="row1" cols="col1">
        <Nav className="nav" grid="grid-temp-1x3" rows="row1" cols="col1" padding="p-1rem">
          <p className="row1 col2 dm-serif-display fs-2rem fw-600 ta-center">
            Biblio
          </p>
        </Nav>
        <Banner className="banner" grid="grid-temp-1x12" rows="row2" cols="col1" gap="grid-col-gap-2em" padding="pt-6rem pr-2rem pl-2rem">
          <p className="row1 col2-span6 dm-serif-display fs-5rem fw-600 lh-1em">
            Enter Your Address to Find Books Near You
          </p>
          <Form className="form" grid="grid-auto-rows-max-content" rows="row1" cols="col8-span3" gap="grid-row-gap-2em">
            <Input type="text" name="address" dataActionType="SET_ADDRESS" font="roboto-lt" fontSize="fs-1rem" height="h-3rem"/>
            <Input type="text" name="city" dataActionType="SET_CITY" font="roboto-lt" fontSize="fs-1rem" height="h-3rem"/>
            <Input type="text" name="state" dataActionType="SET_STATE" font="roboto-lt" fontSize="fs-1rem" height="h-3rem"/>
            <Input type="text" name="zip" dataActionType="SET_ZIP" font="roboto-lt" fontSize="fs-1rem" height="h-3rem"/>
            <Input type="submit" font="roboto-lt" fontSize="fs-1rem" height="h-3rem" />          
          </Form>
        </Banner>
      </Header>
    </Home>
  );
}
export default App;
