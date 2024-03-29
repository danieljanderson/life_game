//todo make is depressed variable and then make it a boolean.
//todo make a function that changes the depressed variable based on feeling value
class Person {
  constructor(
   
  ) {
    this._name = '';
    this._birthdate = '';
    this._gender = '';
    this._money = 0;
    this._charisma = 0;
    this._feeling = 0;
    this._intelligence = 0;
    this._hobbies = [];
    this._location = '';
    this._currentJob = '';
    this._employmentHistory = '';
    this._numberCar = 0;
    this._numberOfJobApp = 0;
    this._jobMessage = '';
    this._networking = false;
    this._numberInterviews = 0;
    this._moneyMessage = '';
    this._evicted = false;
    this._evictedDate = '';
  }
  get evicted() {
    return this._evicted;
  }
  set evicted(kickedOut) {
    this._evicted = kickedOut;
  }
  get evictedDate() {
    return this._evictedDate;
  }
  set evictedDate(newDate) {
    this._evictedDate = newDate;
  }
  get moneyMessage() {
    return this._moneyMessage;
  }
  set moneyMessage(newMessage) {
    this._moneyMessage = newMessage;
  }
  get numberInterviews() {
    return this._numberInterviews;
  }
  set numberInterviews(interview) {
    this._numberInterviews = interview;
  }
  get jobMessage() {
    return this._jobMessage;
  }
  set jobMessage(newMessage) {
    this._jobMessage = newMessage;
  }
  get networking() {
    return this._networking;
  }
  set networking(didNetworking) {
    this._networking = didNetworking;
  }
  // getters and setters
  // get and set for names
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
  // get and set birthdate
  get birthdate() {
    return this._birthdate;
  }
  set birthdate(newBirthdate) {
    this._birthdate = newBirthdate;
  }
  // get and set gender
  get gender() {
    return this._gender;
  }
  set gender(newGender) {
    this._gender = newGender;
  }
  //get and set for money
  get money() {
    return this._money;
  }
  set money(newAmount) {
    this._money = newAmount;
  }
  // get and set for charisma
  get charisma() {
    return this._charisma;
  }
  set charisma(newCharm) {
    this._charisma = newCharm;
  }
  // get and set for feeling
  get feeling() {
    return this._feeling;
  }
  set feeling(newFeeling) {
    this._feeling = newFeeling;
  }
  // get and set intelligence
  get intelligence() {
    return this._intelligence;
  }
  set intelligence(newIntelligence) {
    this._intelligence = newIntelligence;
  }
  // get and set hobbies
  get hobbies() {
    return this._hobbies;
  }
  set hobbies(newHobby) {
    this._hobbies = newHobby;
  }
  // get and set location
  get location() {
    return this._location;
  }
  set location(newLocation) {
    this._location = newLocation;
  }
  //get and set currentEmployer
  get currentJob() {
    return this._currentJob;
  }
  set currentJob(newEmployer) {
    this._currentJob = newEmployer;
  }
  // get and set employmentHistory
  get employmentHistory() {
    return this._employmentHistory;
  }
  set employmentHistory(newJob) {
    this._employmentHistory = newJob;
  }
  // get and set numberApps
  get numberOfJobApp() {
    return this._numberOfJobApp;
  }
  set numberOfJobApp(newAmount) {
    this._numberOfJobApp = newAmount;
  }
  // get and set for car property
  get numberCar() {
    return this._numberCar;
  }
  set numberCar(car) {
    this._numberCar = car;
  }

  //methods
  //todo add methods for adding a hobbie and then one for losing a hobby

  // hobbie methods
  addHobby(newHobby, ...otherHobbies) {
    //this makes a deep copy of hobbies
    this.hobbies = [newHobby, ...otherHobbies, ...this.hobbies];
  }
  removeHobby(Hobby) {
    // this finds the hobby to remove from the Hobby array and removes it
    this._hobbies.splice(this._hobbies.indexOf(Hobby), 1);
    //this reasigns the hard copy to the new hobbies array
    // eslint-disable-next-line
    this._hobbies = this._hobbies;
  }
  //job methods
  //TODO move this to the event class
  applyForJob() {
    this._numberOfJobApp++;
  }
  /////todo move getNewJob into event file because its an event and not something a person owns.
  // getNewJob(newJob) {
  //   if (this._currentJob !== 'unemployed') {
  //     this._employmentHistory = [this._currentJob, ...this._employmentHistory];
  //     this._currentJob = newJob;
  //   } else {
  //     this._currentJob = newJob;
  //   }
  // }
  ///// todo MOVED THIS INTO EVENT CLASS BECAUSE ITS MORE OF AN EVENT THAT A THING A PERSON DOES OR OWNS
  // getFired() {
  //   this._employmentHistory = [this._currentJob, ...this.employmentHistory];
  //   this._currentJob = 'unemployed';
  //   this.depression(Math.round(Math.random() * 10));
  // }

  //feeling methods
  depression(newFeeling) {
    // check if new feeling is 0
    if (newFeeling === 0) {
      newFeeling = -1;
    }
    this._feeling = this._feeling - newFeeling;
  }
  excited(newFeeling) {
    this._feeling = this._feeling + newFeeling;
  }
  //todo move the deposit and withdrawl function inside the event class.
  // money methods
  deposit(amount) {
    this._money = this._money + amount;
  }
  withdrawal(amount) {
    this._money = this._money - amount;
  }
}
export default Person
//module.exports = Person;
