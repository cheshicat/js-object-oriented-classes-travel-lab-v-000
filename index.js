class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date()
  }
  yearsExperienceFromBeginningOf(year) {
    this.year = year
    let endDate = year
    let numberOfYears = (endDate.getFullYear()) - (this.startDate.getFullYear())
    return numberOfYears
    }
}
