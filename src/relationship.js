class Relationship {
  constructor(person1, person2) {
    this._members = [person1, person2];
    this._activityHistory = [];
    this._connection = 0;
    this._dating = false;
    this._startDatingDate = new Date();
  }
  // SETTERS AND GETTERS

  // members
  get members() {
    return this._members;
  }
  set members(newMembers) {
    this._members = newMembers;
  }

  // activity History
  get activityHistory() {
    return this._activityHistory;
  }
  set activityHistory(newHistory) {
    this._activityHistory = newHistory;
  }

  // connection
  get connection() {
    return this._connection;
  }
  set connection(newConnecton) {
    this._connection = newConnecton;
  }

  // dating
  get dating() {
    return this._dating;
  }
  set dating(dating) {
    this._dating = dating;
  }

  // start dating
  get startDatingDate() {
    return this._startDatingDate;
  }
  set startDatingDate(date) {
    this._startDatingDate = date;
  }

  // methods
  checkRelationshipStatus() {
    if (
      (this.members[0].gender === 'male' && this.members[1] === 'female') ||
      (this.members[0].gender === 'female' && this.members[1] == 'male')
    ) {
      if (this.connection === 100 && this._dating === false) {
        console.log(
          `congratulations You ${this.members[0].name} and ${this.members[1].name} just started dating`
        );
        this._dating = true;
      } else if (
        this._dating === true &&
        this.connection > 60 &&
        this.connection < 80
      ) {
        console.log(
          `You ${this.members[0].name} and ${this.members[1].name} are close to breaking up`
        );
      } else if (this.dating === true && this.connection < 60) {
        console.log(
          `You ${this.members[0].name} and ${this.members[1].name} break up`
        );
        this._dating = false;
        this._endDating = new Date();
      }
    } else {
      this._dating = 'NOT POSSIBLE';
    }
  }
  getMemberNames() {
    return [this.members[0], this.members[1]];
  }
  addActivity(newActivity) {
    this._activityHistory = [newActivity, ...this._activityHistory];
  }
  removeHobby(Activity) {
    //finds the activity in the activityHistory array and removes it
    this._activityHistory.splice(this._activityHistory.indexOf(Activity), 1);
    // reasigns the this._activityHistory to the new array
    this._activityHistory = this._activityHistory;
  }
}
module.exports = Relationship;