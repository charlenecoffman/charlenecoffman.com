export interface IXkcdStore {
  getTodaysComic: () => Promise<string>;
}

export default class XkcdStore implements IXkcdStore {
  private todaysComicUrl: string | undefined = undefined;

  public getTodaysComic = async (): Promise<string> => {
    if (!this.todaysComicUrl) {
      await fetch("https://958bkt8h39.execute-api.us-east-1.amazonaws.com/prod/xkcddailycomic")
        .then((res) => res.json())
        .then((result) => {
          this.todaysComicUrl = result.body;
        });
    }

    return this.todaysComicUrl!;
  };
}
