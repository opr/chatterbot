import {expect} from 'chai';
import {List, Map, fromJS, isImmutable} from 'immutable';
import {travel} from "../react/ChatterBot/ChatRoutes/travel";
import {setState, setupInitialState} from "../react/ChatterBot/Logic/core";

describe('Core logic', () => {

  describe('setState', () => {

    it('sets the state', () => {
      const initialState = Map();
      expect(setState(initialState, fromJS(travel))).to.equal(fromJS(travel));
    });
  });

  describe('setUpInitialState', () => {

    it('returns an immutable object if supplied a plain js object', () => {
      const initialState = travel;
      expect(isImmutable(setupInitialState(initialState))).to.equal(true);
    });

    it('sets a default page', () => {
      const initialState = travel;
      expect(isImmutable(setupInitialState(initialState))).to.equal(true);
    });
  })

});
