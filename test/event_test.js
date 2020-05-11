const Person = require('../src/Person');
const Marriage = require('../src/Marriage');
const Relationship = require('../src/Relationship');
const Employment = require('../src/Employment');
const Event = require('../src/Event');
const chai = require('chai');
const expect = chai.expect;
const danielDetails = [
  'Daniel',
  'June,4',
  'Male',
  10,
  50,
  //feelings
  45,
  //intelligence
  100,
  ['golf', 'board_games'],
  'Strongsville',
  'na',
  [],
  0,
];
const jobDetailsDaniel = [
  'State Farm',
  'Strongsville',
  'Programmer',
  'John Smith',
  'I write code for a living.  I make apis using C#',
  40,
  20,
];
describe('tests event class', () => {
  it('it will add intelligence', () => {
    let daniel = new Person(...danielDetails);
    daniel = Event.study(daniel);
    expect(daniel.intelligence).to.be.greaterThan(100);
  });
  it('test the paycheck method', () => {
    let daniel = new Person(...danielDetails);
    const danieljob = new Employment(...jobDetailsDaniel);
    daniel.currentJob = danieljob;
    daniel = Event.payDay(daniel);
    expect(daniel.money).to.equal(810);
  });
  it('it will remove the current job and add unemployed', () => {
    let daniel = new Person(...danielDetails);
    const danieljob = new Employment(...jobDetailsDaniel);
    daniel.currentJob = danieljob;
    daniel = Event.fired(daniel);
    expect(daniel.currentJob).to.deep.equal('unemployed');
    expect(daniel.feeling).to.be.below(45);
  });
  it('it will add state farm to the employment history', () => {
    let daniel = new Person(...danielDetails);
    const danielJob = new Employment(...jobDetailsDaniel);
    const job2 = [
      'Kemper',
      'Akron Ohio',
      'Programmer',
      'John Talyor',
      'I write node code',
      40,
      30,
    ];
    const newJob = new Employment(...job2);
    daniel.currentJob = danielJob;
    daniel = Event.hired(daniel, newJob);
    expect(daniel.employmentHistory).to.deep.equal([danielJob]);
    expect(daniel.currentJob).to.deep.equal(newJob);
  });
  it('study will increase intelligence', () => {
    let daniel = new Person(...danielDetails);
    daniel = Event.study(daniel);
    expect(daniel.intelligence).to.be.greaterThan(100);
  });
  it('I will not be asked to come for an interview', () => {
    let daniel = new Person(...danielDetails);
    daniel = Event.apply(daniel, 6);
    expect(daniel.numberOfApp).to.equal(1);
    expect(daniel.jobMessage).to.deep.equal(
      `Due to the high volume of applicants we regrate to inform you we went with another candidate`
    );
    expect(daniel.feeling).to.equal(44);
  });
  it('I will  be asked to come for an interview because I networked', () => {
    let daniel = new Person(...danielDetails);
    daniel.networking = true;
    daniel = Event.apply(daniel, 7);
    expect(daniel.numberOfApp).to.equal(1);
    expect(daniel.jobMessage).to.deep.equal(
      `congratulations you moved on to the second round`
    );
    expect(daniel.feeling).to.equal(46);
  });
  it('It will aske me to move on to the second round.  Testing the 10 percent (when the number is 0)', () => {
    let daniel = new Person(...danielDetails);
    daniel = Event.apply(daniel, 0);
    expect(daniel.numberOfApp).to.equal(1);
    expect(daniel.jobMessage).to.deep.equal(
      `congratulations you moved on to the second round`
    );
    expect(daniel.feeling).to.equal(46);
  });
  it('it will return an error because phone interview shouldnt have been run', () => {
    let daniel = new Person(...danielDetails);
    daniel = Event.phoneInterview(daniel);
    expect(daniel.jobMessage).to.deep.equal(
      `error you shouldn't have run the interview function in the first place`
    );
  });
  it('phone interview  will fail because i dont have charisma', () => {
    let daniel = new Person(...danielDetails);
    daniel.jobMessage = `congratulations you moved on to the second round`;
    daniel.charisma = -1;
    daniel = Event.phoneInterview(daniel);
    expect(daniel.jobMessage).to.deep.equal('sorry we went with someone else');
    expect(daniel.feeling).to.lessThan(45);
  });
  it('phone interview will pass i will be going to an in person interview', () => {
    let daniel = new Person(...danielDetails);
    daniel.jobMessage = `congratulations you moved on to the second round`;
    daniel.charisma = 10;
    daniel = Event.phoneInterview(daniel);
    expect(daniel.jobMessage).to.deep.equal(
      'we would like to invite you to do an in-person interview'
    );
    expect(daniel.feeling).to.greaterThan(45);
  });
  it('the > 10 it will tell me to come in for a in person ', () => {
    let daniel = new Person(...danielDetails);
    daniel.jobMessage = `congratulations you moved on to the second round`;
    daniel.charisma = 100;
    daniel = Event.phoneInterview(daniel);
    expect(daniel.jobMessage).to.deep.equal(
      'we would like to invite you to do an in-person interview'
    );
    expect(daniel.feeling).to.be.greaterThan(45);
  });
  it('the > 10 it will tell me i failed the interview', () => {
    let daniel = new Person(...danielDetails);
    daniel.jobMessage = `congratulations you moved on to the second round`;
    daniel.charisma = 10.5;
    daniel = Event.phoneInterview(daniel);
    expect(daniel.jobMessage).to.deep.equal('sorry we went with someone else');
    expect(daniel.feeling).to.be.lessThan(45);
  });
  it('job screening will fail', () => {
    let daniel = new Person(...danielDetails);
    daniel.intelligence = 0;
    daniel = Event.jobScreening(daniel);
    expect(daniel.jobMessage).to.deep.equal(
      ' we appreciate your applying but we went with someone else'
    );
  });
  it('job screening will pass', () => {
    let daniel = new Person(...danielDetails);
    daniel.intelligence = 100000;
    daniel = Event.jobScreening(daniel);
    expect(daniel.jobMessage).to.deep.equal(
      'we would like to schedule a phone interview with you'
    );
  });
  it('phone interview will pass', () => {
    let daniel = new Person(...danielDetails);
    daniel.charisma = 10000;
    daniel.jobMessage = 'we would like to schedule a phone interview with you';
    daniel = Event.phoneInterview(daniel);
    expect(daniel.jobMessage).to.deep.equal(
      'we would like to invite you to do an in-person interview'
    );
  });
});