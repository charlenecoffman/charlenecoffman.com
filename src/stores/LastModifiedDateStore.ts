export interface ILastModifiedDateStore {
  getLastModifiedDate: () => Promise<string>;
}

export default class LastModifiedDateStore implements ILastModifiedDateStore {
  private lastModifiedDate: Date | undefined = undefined;

  public getLastModifiedDate = async (): Promise<string> => {
    var returnValue = "";

    if (!this.lastModifiedDate) {
      await fetch("https://958bkt8h39.execute-api.us-east-1.amazonaws.com/prod/buckets?bucket=charlenecoffman.com")
        .then((res) => res.json())
        .then((result) => {
          this.lastModifiedDate = new Date(result);
        });
    }

    returnValue = this.lastModifiedDate!.toLocaleDateString();

    return returnValue;
  };
}
