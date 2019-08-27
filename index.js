class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date()
  }
  yearsExperienceFromBeginningOf(year) {
    let endDate = this.year
    let numberOfYears = (endDate.getFullYear()) - (this.startDate.getFullYear())
    return numberOfYears
    }
}
