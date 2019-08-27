class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date()
  }
  yearsExperienceFromBeginningOf(year) {
    let endDate = this.year
    let numberOfYears = endDate - (this.startDate.getFullYear())
    return numberOfYears
    }
}
