import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-check-list",
  templateUrl: "./check-list.component.html",
  styleUrls: ["./check-list.component.css"]
})
export class CheckListComponent implements OnInit {
  showDirections: boolean = false;
  viewingOptions: boolean = false;
  order: boolean = false;
  orderTitle: string = "Suggested Order";
  films: any[] = [
    {
      name: "Ironman (2008)",
      poster: "ironmanOne.jpg",
      imdb: "https://www.imdb.com/title/tt0371746",
      description:
        "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
      streaming: "disneyPlus.svg",
      watched: this.cookieService.get("ironmanOne"),
      marked: this.cookieService.get("ironmanOne"),
      postScene: "1",
      suggested: 0,
      moreInfo: false,
      timeline: 2,
      cookie: "ironmanOne",
      stanLee:
        "Tony mistakes him for Hugh Hefner on the Stark banquet red carpet."
    },
    {
      name: "Ironman 2 (2010)",
      poster: "ironman2.jpg",
      imdb: "https://www.imdb.com/title/tt1228705",
      description:
        "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
      streaming: "disneyPlus.svg",
      watched: this.cookieService.get("ironmanTwo"),
      marked: this.cookieService.get("ironmanTwo"),
      postScene: "1",
      suggested: 1,
      moreInfo: false,
      timeline: 3,
      cookie: "ironmanTwo",
      stanLee:
        "Tony mistakes him for Larry King after his intro speech at the Expo."
    },
    {
      name: "The Incredible Hulk (2008)",
      poster: "hulk.jpg",
      imdb: " https://www.imdb.com/title/tt0800080/",
      description:
        "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.",
      streaming: "amazonVideo.png",
      watched: this.cookieService.get("hulkOne"),
      marked: this.cookieService.get("hulkOne"),
      postScene: "1",
      suggested: 2,
      moreInfo: false,
      timeline: 4,
      cookie: "hulkOne",
      stanLee:
        "Accidentally ingests a drink with Bruce Banner's blood in it, then falls ill to gamma radiation sickness"
    },
    {
      name: "Thor (2011)",
      poster: "thorOne.jpg",
      imdb: "https://www.imdb.com/title/tt0800369",
      description:
        "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
      streaming: "disneyPlus.svg",
      watched: this.cookieService.get("thorOne"),
      marked: this.cookieService.get("thorOne"),
      postScene: "1",
      suggested: 3,
      moreInfo: false,
      timeline: 5,
      cookie: "thorOne",
      stanLee:
        "He tears the bed of his pickup truck off while trying to pull Thor's hammer out of the ground."
    },
    {
      name: "Captain America: The First Avenger (2011)",
      poster: "captainAmericaOne.jpg",
      imdb: "https://www.imdb.com/title/tt0458339",
      description:
        "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a 'Super-Soldier serum'. But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.",
      streaming: "disneyPlus.svg",
      watched: this.cookieService.get("captainAmericaOne"),
      marked: this.cookieService.get("captainAmericaOne"),
      postScene: "1 - Avengers Trailer",
      suggested: 4,
      moreInfo: false,
      timeline: 0,
      cookie: "captainAmericaOne",
      stanLee: "Audience member at Captain America's award ceremony."
    },
    {
      name: "Avengers (2012)",
      poster: "avengers.jpg",
      imdb: "https://www.imdb.com/title/tt0848228",
      description:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      streaming: "disneyPlus.svg",
      watched: this.cookieService.get("avengersOne"),
      marked: this.cookieService.get("avengersOne"),
      postScene: "2",
      suggested: 5,
      moreInfo: false,
      timeline: 6,
      cookie: "avengersOne",
      stanLee:
        "Stan is being interviewed in the park at the end of the film about the Avengers."
    },
    {
      name: "Ironman 3 (2013)",
      poster: "ironmanThree.jpg",
      imdb: "https://www.imdb.com/title/tt1300854",
      description:
        "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
      streaming: "disneyPlus.svg",
      watched: this.cookieService.get("ironmanThree"),
      marked: this.cookieService.get("ironmanThree"),
      postScene: "1",
      suggested: 6,
      moreInfo: false,
      timeline: 7,
      cookie: "ironmanThree",
      stanLee:
        "He is a beauty pageant judge, and is seen on the monitor in the news truck."
    },
    {
      name: "Thor: Dark World (2013)",
      poster: "thorTwo.jpg",
      imdb: "https://www.imdb.com/title/tt1981115",
      description:
        "When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a perilous and personal journey that will reunite him with doctor Jane Foster.",
      streaming: "disneyPlus.svg",
      watched: this.cookieService.get("thorTwo"),
      marked: this.cookieService.get("thorTwo"),
      postScene: "2",
      suggested: 7,
      moreInfo: false,
      timeline: 8,
      cookie: "thorTwo",
      stanLee: "A fellow patient of Dr. Eric Selvig's at the mental hospital."
    },
    {
      name: "Captain America: The Winter Soldier (2014)",
      poster: "captainAmericaTwo.jpg",
      imdb: "https://www.imdb.com/title/tt1843866",
      description:
        "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.",
      streaming: "disneyPlus.svg",
      watched: this.cookieService.get("captainAmericaTwo"),
      marked: this.cookieService.get("captainAmericaTwo"),
      postScene: "2",
      suggested: 8,
      moreInfo: false,
      timeline: 9,
      cookie: "captainAmericaTwo",
      stanLee:
        "He is the security guard who notices that Captain America's uniform has been stolen."
    },
    {
      name: "Guardians of the Galaxy (2014)",
      poster: "guardiansOne.jpg",
      imdb: "https://www.imdb.com/title/tt2015381",
      description:
        "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
      streaming: "disneyPlus.svg",
      watched: this.cookieService.get("guardiansOne"),
      marked: this.cookieService.get("guardiansOne"),
      postScene: "2",
      suggested: 9,
      moreInfo: false,
      timeline: 10,
      cookie: "guardiansOne",
      stanLee:
        "He's an older gentlemen talking to a much younger women on Xandar, while Rocket and Groot are looking for people with rewards for catching them."
    },
    {
      name: "Avengers: Age of Ultron (2015)",
      poster: "avengersTwo.jpg",
      imdb: "https://www.imdb.com/title/tt2395427",
      description:
        "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
      streaming: "disneyPlus.svg",
      watched: this.cookieService.get("avengersTwo"),
      marked: this.cookieService.get("avengersTwo"),
      postScene: "1",
      suggested: 10,
      moreInfo: false,
      timeline: 12,
      cookie: "avengersTwo",
      stanLee: "Is a WWII veteran at the Avenger's Party."
    },
    {
      name: "Ant-man (2015)",
      poster: "antmanOne.jpg",
      imdb: "https://www.imdb.com/title/tt0478970",
      description:
        "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
      streaming: "disneyPlus.svg",
      watched: this.cookieService.get("antmanOne"),
      marked: this.cookieService.get("antmanOne"),
      postScene: "2",
      suggested: 11,
      moreInfo: false,
      timeline: 13,
      cookie: "antmanOne",
      stanLee: "Appears as a bartender in one of Luis' stories."
    },
    {
      name: "Captain America: Civil War (2016)",
      poster: "captainAmericaThree.jpg",
      imdb: "https://www.imdb.com/title/tt3498820",
      description:
        "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
      streaming: "disneyPlus.svg",
      watched: this.cookieService.get("captainAmericaThree"),
      marked: this.cookieService.get("captainAmericaThree"),
      postScene: "2",
      suggested: 12,
      moreInfo: false,
      timeline: 14,
      cookie: "captainAmericaThree",
      stanLee:
        "He is the FedEx delivery person, who miss pronounces 'Tony Stark' as 'Tony Stank'."
    },
    {
      name: "Spider-man:Homecoming (2017)",
      poster: "spidemanOne.jpg",
      imdb: "https://www.imdb.com/title/tt2250912",
      description:
        "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
      streaming: "starz.png",
      watched: this.cookieService.get("spidermanOne"),
      marked: this.cookieService.get("spidermanOne"),
      postScene: "2",
      suggested: 13,
      moreInfo: false,
      timeline: 15,
      cookie: "spidermanOne",
      stanLee: "Stan is Gary the Neighbor, who threatens to come downstairs."
    },
    {
      name: "Black Panther (2018)",
      poster: "blackPanther.jpg",
      imdb: "https://www.imdb.com/title/tt1825683",
      description:
        "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
      streaming: "disneyPlus.svg",
      watched: this.cookieService.get("blackPantherOne"),
      marked: this.cookieService.get("blackPantherOne"),
      postScene: "2",
      suggested: 14,
      moreInfo: false,
      timeline: 17,
      cookie: "blackPantherOne",
      stanLee: "Is a patron in the Casino in Busan, South Korea"
    },
    {
      name: "Guardians of the Galaxy Vol. 2 (2017)",
      poster: "guardiansTwo.jpg",
      imdb: "https://www.imdb.com/title/tt3896198",
      description:
        "he Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
      streaming: "disneyPlus.svg",
      watched: this.cookieService.get("guardiansTwo"),
      marked: this.cookieService.get("guardiansTwo"),
      postScene: "5",
      suggested: 15,
      moreInfo: false,
      timeline: 11,
      cookie: "guardiansTwo",
      stanLee:
        "Appears talking to the Watchers, talking about his role as a deliver person in Civil War. Appears as well in the credit scenes."
    },
    {
      name: "Doctor Strange (2016)",
      poster: "doctorStrange.jpg",
      imdb: "https://www.imdb.com/title/tt1211837",
      description:
        "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
      streaming: "disneyPlus.svg",
      watched: this.cookieService.get("strangeOne"),
      marked: this.cookieService.get("strangeOne"),
      postScene: "2",
      suggested: 16,
      moreInfo: false,

      timeline: 16,
      cookie: "strangeOne",
      stanLee:
        "Appears as a bus rider, reading Aldous Huxley's 'The Doors of Perception', while Doctor Strange is in a fight."
    },
    {
      name: "Thor: Raganarok (2017)",
      poster: "thorThree.jpg",
      imdb: "https://www.imdb.com/title/tt3501632",
      description:
        "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
      streaming: "disneyPlus.svg",
      watched: this.cookieService.get("thorThree"),
      marked: this.cookieService.get("thorThree"),
      postScene: "2",
      suggested: 17,
      moreInfo: false,
      timeline: 18,
      cookie: "thorThree",
      stanLee: "Appears as the crazy man who cuts Thor's Hair."
    },
    {
      name: "Avengers: Infinity War (2018)",
      poster: "infinityWar.jpg",
      imdb: "https://www.imdb.com/title/tt4154756",
      description:
        "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
      streaming: "netflix.png",
      watched: this.cookieService.get("avengersThree"),
      marked: this.cookieService.get("avengersThree"),
      postScene: "1",
      suggested: 18,
      moreInfo: false,
      timeline: 20,
      cookie: "avengersThree",
      stanLee: "Appears as Peter Parker's bus driver."
    },
    {
      name: "Ant-man and the Wasp (2018)",
      poster: "antmanTwo.jpg",
      imdb: "https://www.imdb.com/title/tt5095030",
      description:
        "As Scott Lang balances being both a superhero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.",
      streaming: "netflix.png",
      watched: this.cookieService.get("antmanTwo"),
      marked: this.cookieService.get("antmanTwo"),
      postScene: "2",
      suggested: 19,
      moreInfo: false,
      timeline: 19,
      cookie: "antmanTwo",
      stanLee: "His car is shrunk by Wasp, makes a comment about past drug use."
    },
    {
      name: "Captain Marvel (2019)",
      poster: "captainMarvel.jpg",
      imdb: "https://www.imdb.com/title/tt4154664",
      description:
        "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
      streaming: "disneyPlus.svg",
      watched: this.cookieService.get("captainMarvelOne"),
      marked: this.cookieService.get("captainMarvelOne"),
      postScene: "2",
      suggested: 20,
      moreInfo: false,
      timeline: 1,
      cookie: "captainMarvelOne",
      stanLee:
        "Working on one of his comics on the bus. He last cameo, he'll be missed."
    },
    {
      name: "Avengers: Endgame (2019)",
      poster: "guardiansOne.jpg",
      imdb: "https://www.imdb.com/title/tt4154796",
      description:
        "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      streaming: "disneyPlus.svg",
      watched: this.cookieService.get("avengersFour"),
      marked: this.cookieService.get("avengersFour"),
      postScene: "1 - Added after Film came out, Spiderman Trailer",
      suggested: 21,
      moreInfo: false,
      timeline: 21,
      cookie: "avengersFour",
      stanLee:
        "Appears as a digitally de-aged driving past the military base in 1970."
    },
    {
      name: "Spider-man: Far From Home (2019)",
      poster: "spidermanTwo.jpg",
      imdb: "https://www.imdb.com/title/tt6320628",
      description:
        "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.",
      streaming: "amazonVideo.png",
      watched: this.cookieService.get("spidermanTwo"),
      marked: this.cookieService.get("spidermanTwo"),
      postScene: "2",
      suggested: 22,
      moreInfo: false,
      timeline: 22,
      cookie: "spidermanTwo",
      stanLee: "Does not appear. Excelsior."
    }
  ];
  movies: any[];
  constructor(private cookieService: CookieService) {}

  ngOnInit() {
    this.startCookies();
    this.sortSuggestedOrder();
  }
  startCookies() {
    if (this.cookieService.get("start") === "") {
      this.cookieService.set("start", "true");
      this.cookieService.set("ironmanOne", "false");
      this.cookieService.set("ironmanTwo", "false");
      this.cookieService.set("ironmanThree", "false");
      this.cookieService.set("thorOne", "false");
      this.cookieService.set("thorTwo", "false");
      this.cookieService.set("thorThree", "false");
      this.cookieService.set("captainAmericaOne", "false");
      this.cookieService.set("captainAmericaTwo", "false");
      this.cookieService.set("captainAmericaThree", "false");
      this.cookieService.set("avengersOne", "false");
      this.cookieService.set("avengersTwo", "false");
      this.cookieService.set("avengersThree", "false");
      this.cookieService.set("avengersFour", "false");
      this.cookieService.set("guardiansOne", "false");
      this.cookieService.set("guardiansTwo", "false");
      this.cookieService.set("antmanOne", "false");
      this.cookieService.set("antmanTwo", "false");
      this.cookieService.set("captainMarvelOne", "false");
      this.cookieService.set("blackPantherOne", "false");
      this.cookieService.set("spidermanOne", "false");
      this.cookieService.set("spidermanTwo", "false");
      this.cookieService.set("strangeOne", "false");
      this.cookieService.set("hulkOne", "false");
    } else if (this.cookieService.get("start") == "false") {
      this.films.forEach(film => {
        film.marked = false;
      });
    }
  }
  sortSuggestedOrder() {
    this.movies = this.films.sort((a, b) =>
      a.suggested > b.suggested ? 1 : -1
    );
    this.order = false;
  }
  sortTimelineOrder() {
    this.movies = this.films.sort((a, b) => (a.timeline > b.timeline ? 1 : -1));
    this.order = true;
  }
  showDefinition(): void {
    this.showDirections = !this.showDirections;
  }
  showViewingOptions(): void {
    this.viewingOptions = !this.viewingOptions;
  }
  toggleOrder(): void {
    this.order = !this.order;
    if (this.order === false) {
      this.orderTitle = "Suggested Order";
      this.sortSuggestedOrder();
    } else {
      this.orderTitle = "Timeline Order";
      this.sortTimelineOrder();
    }
  }
  reset() {
    this.films.forEach(film => {
      film.marked = "false";
    });
    this.cookieService.deleteAll();
    // this.startCookies();
  }
  checkBox(n: number) {
    if (this.cookieService.get(`${this.films[n].cookie}`) === "false") {
      this.cookieService.set(`${this.films[n].cookie}`, "true");
      this.films[n].marked = "true";
    } else {
      this.cookieService.set(`${this.films[n].cookie}`, "false");
      this.films[n].marked = "false";
    }
    //this.films[n].watched = !this.films[n].watched;
  }
  showMoreInfo(n: number) {
    this.films[n].moreInfo = !this.films[n].moreInfo;
  }
}
