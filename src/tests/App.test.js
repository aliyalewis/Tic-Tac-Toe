import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Score from "../Score";
import NewGame from "../NewGame";
import { shallow } from "enzyme";
import chai, { expect } from "chai";
import sinonChai from "sinon-chai";

chai.use(sinonChai);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

  describe("Test for <Score /> in <App />", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<App />).find(Score);
    });

    it("Renders <Score />", () => {
      expect(wrapper.exists()).to.equal(true)
    });

  describe("Test for <NewGame /> in <App/>", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<App />).find(NewGame);
    });

    it("Passes this.clearBoard as a prop to <NewGame />", () => {
      expect(wrapper.props().clearBoard).to.exist
    })
  })

});
