class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date()
  }
  yearsExperienceFromBeginningOf(endDate) {
    this.endDate = endDate
    let numberOfYears = (endDate.getFullYear()) - (this.startDate.getFullYear())
    return numberOfYears
    }
}
