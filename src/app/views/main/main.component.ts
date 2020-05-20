import { Component, OnInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";

const MONTHS = {
  en: [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ],
  es: [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ],
  pr: [
    "janeiro",
    "fevereiro",
    "marcha",
    "abril",
    "pode",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ],
};
const WEEKDAYS = {
  en: ["m", "t", "w", "t", "f", "s", "s"],
  es: ["l", "m", "m", "j", "v", "s", "d"],
  pr: ["s", "t", "q", "q", "s", "s", "d"],
};
enum ShowSelector {
  DAY = "day",
  MONTH = "month",
  YEAR = "year",
}

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 4,
      },
      940: {
        items: 6,
      },
    },
    nav: false,
  };

  slidesStore = [
    {
      id: 1,
      src: "http://placehold.it/350x150/000000",
      alt: "carousel slide",
      title: "image title",
      time: "00:00",
    },
    {
      id: 2,
      src: "http://placehold.it/350x150/111111",
      alt: "carousel slide",
      title: "image title",
      time: "00:15",
    },
    {
      id: 3,
      src: "http://placehold.it/350x150/333333",
      alt: "carousel slide",
      title: "image title",
      time: "00:30",
    },
    {
      id: 4,
      src: "http://placehold.it/350x150/666666",
      alt: "carousel slide",
      title: "image title",
      time: "00:45",
    },
    {
      id: 5,
      src: "http://placehold.it/350x150/000000",
      alt: "carousel slide",
      title: "image title",
      time: "01:00",
    },
    {
      id: 6,
      src: "http://placehold.it/350x150/111111",
      alt: "carousel slide",
      title: "image title",
      time: "01:15",
    },
    {
      id: 7,
      src: "http://placehold.it/350x150/333333",
      alt: "carousel slide",
      title: "image title",
      time: "01:30",
    },
    {
      id: 8,
      src: "http://placehold.it/350x150/666666",
      alt: "carousel slide",
      title: "image title",
      time: "01:45",
    },
    {
      id: 9,
      src: "http://placehold.it/350x150/000000",
      alt: "carousel slide",
      title: "image title",
      time: "02:00",
    },
    {
      id: 10,
      src: "http://placehold.it/350x150/111111",
      alt: "carousel slide",
      title: "image title",
      time: "02:15",
    },
    {
      id: 11,
      src: "http://placehold.it/350x150/333333",
      alt: "carousel slide",
      title: "image title",
      time: "02:30",
    },
    {
      id: 12,
      src: "http://placehold.it/350x150/666666",
      alt: "carousel slide",
      title: "image title",
      time: "02:45",
    },
  ];
}
