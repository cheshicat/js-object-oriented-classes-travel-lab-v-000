class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date()
  }
  yearsExperienceFromBeginningOf(endDate) {
    this.endDate = endDate
    let numberOfYears = (endDate - (this.startDate.getFullYear())
    return numberOfYears
    }
}
