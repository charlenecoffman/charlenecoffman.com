import Poem from "../models/Poem";

export interface IPoemStore {
  getTodaysPoem: () => Promise<Poem>;
}

export default class PoemStore implements IPoemStore {
  private todaysPoem: Poem | undefined = undefined;
  private poetsList = ["Dickenson", "Frost", "Oliver", "Eliot", "Silverstein", "Kipling", "Bronte", "Poe", "Thoreau", "Shakespeare", ""];
  public getTodaysPoem = async (): Promise<Poem> => {
    if (!this.todaysPoem) {
      var tries = 0;

      do {
        tries++;
        var url = this.GetUrlWithRandom();
        var poem = await this.GetPoem(url);

        if (poem && poem?.lines.length > 0) {
          this.todaysPoem = poem;
          tries = 5;
        } else if (tries === 5) {
          var tencountpoem = await this.GetPoem(this.GetTenCountUrl());
          if (tencountpoem) {
            this.todaysPoem = tencountpoem;
          }
        }
      } while (tries < 5);
    }
    return this.todaysPoem!;
  };

  private GetPoem = async (url: string): Promise<Poem | undefined> => {
    var returnValue;
    await fetch(url)
      .then((res) => res.json())
      .then((result) => {
        if (result.length > 0) {
          var randomChoice = Math.floor(Math.random() * result.length);
          returnValue = result[randomChoice] as Poem;
        }
      })
      .catch(() => {
        returnValue = undefined;
      });

    return returnValue;
  };

  private GetUrlWithRandom = (): string => {
    var author = this.chooseAuthor();
    var url = "https://poetrydb.org/";
    if (author !== "") {
      url = url + "author/" + author + "/";
    }
    var randomLineCount = Math.floor(Math.random() * 8) + 2;
    if (randomLineCount === 0) {
      randomLineCount = 2;
    }
    return url + "linecount/" + randomLineCount;
  };

  private chooseAuthor = (): string => {
    return this.poetsList[Math.floor(Math.random() * this.poetsList.length)];
  };

  private GetTenCountUrl = (): string => {
    //I changed it to get any poem from 2 - 12 lines
    var lineCuunt = Math.floor(Math.random() * 10) + 2;
    return "https://poetrydb.org/linecount/" + lineCuunt;
  };
}
