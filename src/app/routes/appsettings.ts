export class AppSettings {

  public static get build(): string {
    return "local";
  }
  public static get ng2ENV(): string {
    return null;
  }
  public static get ApiEndpoint(): string {
    return "/api/";
  }
}