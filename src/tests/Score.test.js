import React from "react";
import Score from "../Score";
import { shallow } from "enzyme";
import chai, { expect } from "chai";
import { spy } from "sinon";
import sinonChai from "sinon-chai";

chai.use(sinonChai);

describe.only("Test for <Score />", () => {
    let wrapper;

    beforeEach(() => { 
        wrapper = shallow(<Score />);
    });

    it('includes 1 div with a class name of "score', () => {
        expect(wrapper.find("div.score")).to.have.lengthOf(1);
    });
})


