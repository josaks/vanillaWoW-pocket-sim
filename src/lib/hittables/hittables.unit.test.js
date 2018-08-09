//Unit tests for hittables
import dwTable from './dwTable';
import twohandTable from './twohandTable';

//melee table testing

let tableDwGeneral = dwTable(0, 2.20, 150, 300);
test('dw table general test', () => {
  expect(tableDwGeneral.getCoefficient()).toBe(0.724);
});

let tableTwoHGeneral = twohandTable(0, 2.20, 150, 300);
test('twohand table test', () => {
  expect(tableTwoHGeneral.getCoefficient()).toBe(0.914);
});

let tableDwHitcap = dwTable(280, 2.20, 150, 300);
test('hitcap test', () => {
  expect(tableDwHitcap.getCoefficient()).toBe(1.004);
});

let tableTwoHHitcap = dwTable(280, 2.20, 150, 300);
test('hitcap test', () => {
  expect(tableTwoHHitcap.getCoefficient()).toBe(1.004);
});

//exception testing

//caster table testing

//exception testing
