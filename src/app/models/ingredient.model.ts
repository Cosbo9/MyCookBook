export class Ingredient {
  public name: string;
  public amount: string;
  public measurement: string;
    constructor(public ingName: string, public ingAmount: string, public ingMeasurement: string) {
      this.name = ingName
      this.amount = ingAmount
      this.measurement = ingMeasurement
    }
}
