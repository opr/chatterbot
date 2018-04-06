import {expect} from 'chai';
import {List, Map, fromJS, isImmutable} from 'immutable';
import {travel} from "../react/ChatterBot/ChatRoutes/travel";
import {chooseAnswer, setState, setupInitialState} from "../react/ChatterBot/Logic/core";

describe('Core logic', () => {

  describe('setState', () => {

    it('sets the state', () => {
      const initialState = Map();
      expect(setState(initialState, fromJS(travel))).to.equal(fromJS(travel));
    });
  });

  describe('setUpInitialState', () => {

    it('returns an immutable object if supplied a plain js object', () => {
      expect(isImmutable(setupInitialState(travel))).to.equal(true);
    });

    it('sets a default page', () => {
      expect(setupInitialState(travel).getIn(['currentMessage'])).to.equal('welcome');
    });

    it('sets a history object', () => {
      expect(setupInitialState(travel).getIn(['history'])).to.not.equal('undefined');
    });
  });

  describe('chooseAnswer', () => {

    it('sets the selected answer in the correct question', () => {
      const initialState = setupInitialState(travel);
      expect(chooseAnswer(initialState, 0).getIn(['messages', 'welcome', 'chosenAnswer'])).to.equal(0);
    });

    it('moves on to the correct next message after choosing an answer', () => {
      const initialState = setupInitialState(travel);
      expect(chooseAnswer(initialState, 0).getIn(['currentMessage'])).to.equal('riches');
    });

    it('adds the previous question and the selected answer into the history', () => {
      const initialState = setupInitialState(travel);
      const nextState = chooseAnswer(initialState, 0);
      expect(nextState.getIn(['currentMessage'])).to.equal('riches');
      expect(nextState.getIn(['history']).count()).to.equal(1);
    });
  });

});
