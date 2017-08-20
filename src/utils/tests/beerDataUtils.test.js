import { expect } from 'chai'
import {
  getBeerIndex,
  getBeer
} from '../beerDataUtils'

const dummyBeers = [
  {
    id: 1,
    name: 'Duvel'
  },
  {
    id: 2,
    name: 'Karmeliet'
  }
];

describe('beerDataUtils', () => {
  describe('getBeerIndex', () => {
    it('returns the correct index when the id is found', () => {
      expect(getBeerIndex(dummyBeers, 2)).to.equal(1);
    });

    it('returns -1 when the id cannot be found', () => {
      expect(getBeerIndex(dummyBeers, -55)).to.equal(-1);
    });
  });

  describe('getBeer', () => {
    it('returns the correct Beer', () => {
      expect(getBeer(dummyBeers, 1)).to.have.property('name', 'Duvel');
    });

    it('returns null when the beer cannot be found', () => {
      expect(getBeer(dummyBeers, -66)).to.equal(undefined);
    });
  });
});