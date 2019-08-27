class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date()
  }
  yearsExperienceFromBeginningOf(endDate) {
  let years = (endDate.getFullYear() - this.startDate.getFullYear())
  years
  }
}
