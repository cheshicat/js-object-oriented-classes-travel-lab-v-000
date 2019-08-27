class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date()
  }
  yearsExperienceFromBeginningOf(endDate) {
  let years = (this.endDate - this.startDate.getFullYear())
  years
  }
}
