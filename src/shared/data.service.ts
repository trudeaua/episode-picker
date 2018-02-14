import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
    shows: any[];
    episodes: any;
    constructor() {
        this.shows = [
            {
                "name": "The Office",
                "trackId": 200257859,
                "imdbId": "tt0386676",
                "color": "office",
                "img": "https://gchseagleseye.com/wp-content/uploads/2017/12/CB4F175D-52A6-4AB3-870A-FCB844E99154.jpeg",
                "info": "A mediocre paper company in the hands of Scranton, PA branch manager Michael Scott. This mockumentary follows the everyday lives of the manager and the employees he \"manages.\" The crew follows the employees around 24/7 and captures their quite humerous and bizarre encounters as they will do what it takes to keep the company thriving."
            },
            {
                "name": "Arrested Development",
                "trackId": 200257859,
                "imdbId": "tt0367279",
                "color": "arrestedDev",
                "img": "http://img.gawkerassets.com/img/18owg0wipql5mjpg/k-bigpic.jpg",
                "info": "Level-headed son Michael Bluth takes over family affairs after his father is imprisoned. But the rest of his spoiled, dysfunctional family are making his job unbearable."
            }
        ]
        this.episodes =
            {
                "tt0386676": {
                    "name": "The Office",
                    "trackId": 200257859,
                    "episodes": [
                        {
                            "season": 1,
                            "episode": 1,
                            "episodeId": 70105212,
                            "trackId": 200257859
                        },
                        {
                            "season": 1,
                            "episode": 2,
                            "episodeId": 70069628,
                            "trackId": 200257859
                        },
                        {
                            "season": 1,
                            "episode": 3,
                            "episodeId": 70069629,
                            "trackId": 200257859
                        },
                        {
                            "season": 1,
                            "episode": 4,
                            "episodeId": 70069630,
                            "trackId": 200257859
                        },
                        {
                            "season": 1,
                            "episode": 5,
                            "episodeId": 70069631,
                            "trackId": 200257859
                        },
                        {
                            "season": 1,
                            "episode": 6,
                            "episodeId": 70069632,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 1,
                            "episodeId": 70069633,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 2,
                            "episodeId": 70069634,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 3,
                            "episodeId": 70069635,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 4,
                            "episodeId": 70069636,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 5,
                            "episodeId": 70069637,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 6,
                            "episodeId": 70069638,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 7,
                            "episodeId": 70069639,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 8,
                            "episodeId": 70069640,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 9,
                            "episodeId": 70069641,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 10,
                            "episodeId": 70069642,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 11,
                            "episodeId": 70069643,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 12,
                            "episodeId": 70069644,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 13,
                            "episodeId": 70069645,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 14,
                            "episodeId": 70069646,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 15,
                            "episodeId": 70069647,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 16,
                            "episodeId": 70069648,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 17,
                            "episodeId": 70069649,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 18,
                            "episodeId": 70069650,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 19,
                            "episodeId": 70069651,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 20,
                            "episodeId": 70069652,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 21,
                            "episodeId": 70069653,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 22,
                            "episodeId": 70069654,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 1,
                            "episodeId": 70080635,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 2,
                            "episodeId": 70080631,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 3,
                            "episodeId": 70080633,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 4,
                            "episodeId": 70080636,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 5,
                            "episodeId": 70080637,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 6,
                            "episodeId": 70080634,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 7,
                            "episodeId": 70080628,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 8,
                            "episodeId": 70080639,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 9,
                            "episodeId": 70080632,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 10,
                            "episodeId": 70080627,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 11,
                            "episodeId": 70080624,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 12,
                            "episodeId": 70080645,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 13,
                            "episodeId": 70080643,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 14,
                            "episodeId": 70080626,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 15,
                            "episodeId": 70080641,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 16,
                            "episodeId": 70080629,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 17,
                            "episodeId": 70080630,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 18,
                            "episodeId": 70080640,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 19,
                            "episodeId": 70080644,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 20,
                            "episodeId": 70080642,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 21,
                            "episodeId": 70080646,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 22,
                            "episodeId": 70080625,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 23,
                            "episodeId": 70080638,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 1,
                            "episodeId": 70108687,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 2,
                            "episodeId": 70108688,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 3,
                            "episodeId": 70108689,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 4,
                            "episodeId": 70108690,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 5,
                            "episodeId": 70108691,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 6,
                            "episodeId": 70108692,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 7,
                            "episodeId": 70108693,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 8,
                            "episodeId": 70108694,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 9,
                            "episodeId": 70108695,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 10,
                            "episodeId": 70108696,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 11,
                            "episodeId": 70108697,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 12,
                            "episodeId": 70108698,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 13,
                            "episodeId": 70108699,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 14,
                            "episodeId": 70108700,
                            "trackId": 200257859
                        },
                        {
                            "season": 5,
                            "episode": 1,
                            "episodeId": 70126223,
                            "trackId": 200257859
                        },
                        {
                            "season": 5,
                            "episode": 2,
                            "episodeId": 70126250,
                            "trackId": 200257859
                        },
                        {
                            "season": 5,
                            "episode": 3,
                            "episodeId": 70126224,
                            "trackId": 200257859
                        },
                        {
                            "season": 5,
                            "episode": 4,
                            "episodeId": 70126225,
                            "trackId": 200257859
                        },
                        {
                            "season": 5,
                            "episode": 5,
                            "episodeId": 70126226,
                            "trackId": 200257859
                        },
                        {
                            "season": 5,
                            "episode": 6,
                            "episodeId": 70126227,
                            "trackId": 200257859
                        },
                        {
                            "season": 5,
                            "episode": 7,
                            "episodeId": 70126228,
                            "trackId": 200257859
                        },
                        {
                            "season": 5,
                            "episode": 8,
                            "episodeId": 70126229,
                            "trackId": 200257859
                        },
                        {
                            "season": 5,
                            "episode": 9,
                            "episodeId": 70126230,
                            "trackId": 200257859
                        },
                        {
                            "season": 5,
                            "episode": 10,
                            "episodeId": 70126231,
                            "trackId": 200257859
                        },
                        {
                            "season": 5,
                            "episode": 11,
                            "episodeId": 70126232,
                            "trackId": 200257859
                        },
                        {
                            "season": 5,
                            "episode": 12,
                            "episodeId": 70126233,
                            "trackId": 200257859
                        },
                        {
                            "season": 5,
                            "episode": 13,
                            "episodeId": 70126234,
                            "trackId": 200257859
                        },
                        {
                            "season": 5,
                            "episode": 14,
                            "episodeId": 70126235,
                            "trackId": 200257859
                        },
                        {
                            "season": 5,
                            "episode": 15,
                            "episodeId": 70126249,
                            "trackId": 200257859
                        },
                        {
                            "season": 5,
                            "episode": 16,
                            "episodeId": 70126236,
                            "trackId": 200257859
                        },
                        {
                            "season": 5,
                            "episode": 17,
                            "episodeId": 70126237,
                            "trackId": 200257859
                        },
                        {
                            "season": 5,
                            "episode": 18,
                            "episodeId": 70126238,
                            "trackId": 200257859
                        },
                        {
                            "season": 5,
                            "episode": 19,
                            "episodeId": 70126239,
                            "trackId": 200257859
                        },
                        {
                            "season": 5,
                            "episode": 20,
                            "episodeId": 70126240,
                            "trackId": 200257859
                        },
                        {
                            "season": 5,
                            "episode": 21,
                            "episodeId": 70126241,
                            "trackId": 200257859
                        },
                        {
                            "season": 5,
                            "episode": 22,
                            "episodeId": 70126242,
                            "trackId": 200257859
                        },
                        {
                            "season": 5,
                            "episode": 23,
                            "episodeId": 70126243,
                            "trackId": 200257859
                        },
                        {
                            "season": 5,
                            "episode": 24,
                            "episodeId": 70126244,
                            "trackId": 200257859
                        },
                        {
                            "season": 5,
                            "episode": 25,
                            "episodeId": 70126245,
                            "trackId": 200257859
                        },
                        {
                            "season": 5,
                            "episode": 26,
                            "episodeId": 70126246,
                            "trackId": 200257859
                        },
                        {
                            "season": 5,
                            "episode": 27,
                            "episodeId": 70126247,
                            "trackId": 200257859
                        },
                        {
                            "season": 5,
                            "episode": 28,
                            "episodeId": 70126248,
                            "trackId": 200257859
                        },
                        {
                            "season": 6,
                            "episode": 1,
                            "episodeId": 70151933,
                            "trackId": 200257859
                        },
                        {
                            "season": 6,
                            "episode": 2,
                            "episodeId": 70151934,
                            "trackId": 200257859
                        },
                        {
                            "season": 6,
                            "episode": 3,
                            "episodeId": 70151935,
                            "trackId": 200257859
                        },
                        {
                            "season": 6,
                            "episode": 4,
                            "episodeId": 70151936,
                            "trackId": 200257859
                        },
                        {
                            "season": 6,
                            "episode": 5,
                            "episodeId": 70151937,
                            "trackId": 200257859
                        },
                        {
                            "season": 6,
                            "episode": 6,
                            "episodeId": 70151938,
                            "trackId": 200257859
                        },
                        {
                            "season": 6,
                            "episode": 7,
                            "episodeId": 70151939,
                            "trackId": 200257859
                        },
                        {
                            "season": 6,
                            "episode": 8,
                            "episodeId": 70151940,
                            "trackId": 200257859
                        },
                        {
                            "season": 6,
                            "episode": 9,
                            "episodeId": 70151941,
                            "trackId": 200257859
                        },
                        {
                            "season": 6,
                            "episode": 10,
                            "episodeId": 70151942,
                            "trackId": 200257859
                        },
                        {
                            "season": 6,
                            "episode": 11,
                            "episodeId": 70151943,
                            "trackId": 200257859
                        },
                        {
                            "season": 6,
                            "episode": 12,
                            "episodeId": 70151944,
                            "trackId": 200257859
                        },
                        {
                            "season": 6,
                            "episode": 13,
                            "episodeId": 70151945,
                            "trackId": 200257859
                        },
                        {
                            "season": 6,
                            "episode": 14,
                            "episodeId": 70151946,
                            "trackId": 200257859
                        },
                        {
                            "season": 6,
                            "episode": 15,
                            "episodeId": 70151947,
                            "trackId": 200257859
                        },
                        {
                            "season": 6,
                            "episode": 16,
                            "episodeId": 70151948,
                            "trackId": 200257859
                        },
                        {
                            "season": 6,
                            "episode": 17,
                            "episodeId": 70151949,
                            "trackId": 200257859
                        },
                        {
                            "season": 6,
                            "episode": 18,
                            "episodeId": 70151950,
                            "trackId": 200257859
                        },
                        {
                            "season": 6,
                            "episode": 19,
                            "episodeId": 70151951,
                            "trackId": 200257859
                        },
                        {
                            "season": 6,
                            "episode": 20,
                            "episodeId": 70151952,
                            "trackId": 200257859
                        },
                        {
                            "season": 6,
                            "episode": 21,
                            "episodeId": 70151953,
                            "trackId": 200257859
                        },
                        {
                            "season": 6,
                            "episode": 22,
                            "episodeId": 70151954,
                            "trackId": 200257859
                        },
                        {
                            "season": 6,
                            "episode": 23,
                            "episodeId": 70151955,
                            "trackId": 200257859
                        },
                        {
                            "season": 6,
                            "episode": 24,
                            "episodeId": 70151956,
                            "trackId": 200257859
                        },
                        {
                            "season": 6,
                            "episode": 25,
                            "episodeId": 70151957,
                            "trackId": 200257859
                        },
                        {
                            "season": 6,
                            "episode": 26,
                            "episodeId": 70151958,
                            "trackId": 200257859
                        },
                        {
                            "season": 7,
                            "episode": 1,
                            "episodeId": 70189006,
                            "trackId": 200257859
                        },
                        {
                            "season": 7,
                            "episode": 2,
                            "episodeId": 70189007,
                            "trackId": 200257859
                        },
                        {
                            "season": 7,
                            "episode": 3,
                            "episodeId": 70189008,
                            "trackId": 200257859
                        },
                        {
                            "season": 7,
                            "episode": 4,
                            "episodeId": 70189009,
                            "trackId": 200257859
                        },
                        {
                            "season": 7,
                            "episode": 5,
                            "episodeId": 70189010,
                            "trackId": 200257859
                        },
                        {
                            "season": 7,
                            "episode": 6,
                            "episodeId": 70189011,
                            "trackId": 200257859
                        },
                        {
                            "season": 7,
                            "episode": 7,
                            "episodeId": 70189012,
                            "trackId": 200257859
                        },
                        {
                            "season": 7,
                            "episode": 8,
                            "episodeId": 70189013,
                            "trackId": 200257859
                        },
                        {
                            "season": 7,
                            "episode": 9,
                            "episodeId": 70189014,
                            "trackId": 200257859
                        },
                        {
                            "season": 7,
                            "episode": 10,
                            "episodeId": 70189015,
                            "trackId": 200257859
                        },
                        {
                            "season": 7,
                            "episode": 11,
                            "episodeId": 70189016,
                            "trackId": 200257859
                        },
                        {
                            "season": 7,
                            "episode": 12,
                            "episodeId": 70189017,
                            "trackId": 200257859
                        },
                        {
                            "season": 7,
                            "episode": 13,
                            "episodeId": 70189018,
                            "trackId": 200257859
                        },
                        {
                            "season": 7,
                            "episode": 14,
                            "episodeId": 70189019,
                            "trackId": 200257859
                        },
                        {
                            "season": 7,
                            "episode": 15,
                            "episodeId": 70189020,
                            "trackId": 200257859
                        },
                        {
                            "season": 7,
                            "episode": 16,
                            "episodeId": 70189021,
                            "trackId": 200257859
                        },
                        {
                            "season": 7,
                            "episode": 17,
                            "episodeId": 70189022,
                            "trackId": 200257859
                        },
                        {
                            "season": 7,
                            "episode": 18,
                            "episodeId": 70189023,
                            "trackId": 200257859
                        },
                        {
                            "season": 7,
                            "episode": 19,
                            "episodeId": 70189024,
                            "trackId": 200257859
                        },
                        {
                            "season": 7,
                            "episode": 20,
                            "episodeId": 70189025,
                            "trackId": 200257859
                        },
                        {
                            "season": 7,
                            "episode": 21,
                            "episodeId": 70189026,
                            "trackId": 200257859
                        },
                        {
                            "season": 7,
                            "episode": 22,
                            "episodeId": 70189027,
                            "trackId": 200257859
                        },
                        {
                            "season": 7,
                            "episode": 23,
                            "episodeId": 70189028,
                            "trackId": 200257859
                        },
                        {
                            "season": 7,
                            "episode": 24,
                            "episodeId": 70189029,
                            "trackId": 200257859
                        },
                        {
                            "season": 7,
                            "episode": 25,
                            "episodeId": 70189030,
                            "trackId": 200257859
                        },
                        {
                            "season": 7,
                            "episode": 26,
                            "episodeId": 70189031,
                            "trackId": 200257859
                        },
                        {
                            "season": 8,
                            "episode": 1,
                            "episodeId": 70210965,
                            "trackId": 200257859
                        },
                        {
                            "season": 8,
                            "episode": 2,
                            "episodeId": 70210966,
                            "trackId": 200257859
                        },
                        {
                            "season": 8,
                            "episode": 3,
                            "episodeId": 70210967,
                            "trackId": 200257859
                        },
                        {
                            "season": 8,
                            "episode": 4,
                            "episodeId": 70210968,
                            "trackId": 200257859
                        },
                        {
                            "season": 8,
                            "episode": 5,
                            "episodeId": 70210969,
                            "trackId": 200257859
                        },
                        {
                            "season": 8,
                            "episode": 6,
                            "episodeId": 70210970,
                            "trackId": 200257859
                        },
                        {
                            "season": 8,
                            "episode": 7,
                            "episodeId": 70210971,
                            "trackId": 200257859
                        },
                        {
                            "season": 8,
                            "episode": 8,
                            "episodeId": 70210972,
                            "trackId": 200257859
                        },
                        {
                            "season": 8,
                            "episode": 9,
                            "episodeId": 70210973,
                            "trackId": 200257859
                        },
                        {
                            "season": 8,
                            "episode": 10,
                            "episodeId": 70210974,
                            "trackId": 200257859
                        },
                        {
                            "season": 8,
                            "episode": 11,
                            "episodeId": 70210975,
                            "trackId": 200257859
                        },
                        {
                            "season": 8,
                            "episode": 12,
                            "episodeId": 70210976,
                            "trackId": 200257859
                        },
                        {
                            "season": 8,
                            "episode": 13,
                            "episodeId": 70210977,
                            "trackId": 200257859
                        },
                        {
                            "season": 8,
                            "episode": 14,
                            "episodeId": 70210978,
                            "trackId": 200257859
                        },
                        {
                            "season": 8,
                            "episode": 15,
                            "episodeId": 70210979,
                            "trackId": 200257859
                        },
                        {
                            "season": 8,
                            "episode": 16,
                            "episodeId": 70210980,
                            "trackId": 200257859
                        },
                        {
                            "season": 8,
                            "episode": 17,
                            "episodeId": 70210981,
                            "trackId": 200257859
                        },
                        {
                            "season": 8,
                            "episode": 18,
                            "episodeId": 70210982,
                            "trackId": 200257859
                        },
                        {
                            "season": 8,
                            "episode": 19,
                            "episodeId": 70210983,
                            "trackId": 200257859
                        },
                        {
                            "season": 8,
                            "episode": 20,
                            "episodeId": 70210984,
                            "trackId": 200257859
                        },
                        {
                            "season": 8,
                            "episode": 21,
                            "episodeId": 70210985,
                            "trackId": 200257859
                        },
                        {
                            "season": 8,
                            "episode": 22,
                            "episodeId": 70210986,
                            "trackId": 200257859
                        },
                        {
                            "season": 8,
                            "episode": 23,
                            "episodeId": 70210987,
                            "trackId": 200257859
                        },
                        {
                            "season": 8,
                            "episode": 24,
                            "episodeId": 70210988,
                            "trackId": 200257859
                        },
                        {
                            "season": 9,
                            "episode": 1,
                            "episodeId": 70286845,
                            "trackId": 200257859
                        },
                        {
                            "season": 9,
                            "episode": 2,
                            "episodeId": 70286846,
                            "trackId": 200257859
                        },
                        {
                            "season": 9,
                            "episode": 3,
                            "episodeId": 70286847,
                            "trackId": 200257859
                        },
                        {
                            "season": 9,
                            "episode": 4,
                            "episodeId": 70286848,
                            "trackId": 200257859
                        },
                        {
                            "season": 9,
                            "episode": 5,
                            "episodeId": 70286849,
                            "trackId": 200257859
                        },
                        {
                            "season": 9,
                            "episode": 6,
                            "episodeId": 70286850,
                            "trackId": 200257859
                        },
                        {
                            "season": 9,
                            "episode": 7,
                            "episodeId": 70286851,
                            "trackId": 200257859
                        },
                        {
                            "season": 9,
                            "episode": 8,
                            "episodeId": 70286852,
                            "trackId": 200257859
                        },
                        {
                            "season": 9,
                            "episode": 9,
                            "episodeId": 70286853,
                            "trackId": 200257859
                        },
                        {
                            "season": 9,
                            "episode": 10,
                            "episodeId": 70286854,
                            "trackId": 200257859
                        },
                        {
                            "season": 9,
                            "episode": 11,
                            "episodeId": 70286855,
                            "trackId": 200257859
                        },
                        {
                            "season": 9,
                            "episode": 12,
                            "episodeId": 70286856,
                            "trackId": 200257859
                        },
                        {
                            "season": 9,
                            "episode": 13,
                            "episodeId": 70286857,
                            "trackId": 200257859
                        },
                        {
                            "season": 9,
                            "episode": 14,
                            "episodeId": 70286858,
                            "trackId": 200257859
                        },
                        {
                            "season": 9,
                            "episode": 15,
                            "episodeId": 70286859,
                            "trackId": 200257859
                        },
                        {
                            "season": 9,
                            "episode": 16,
                            "episodeId": 70286860,
                            "trackId": 200257859
                        },
                        {
                            "season": 9,
                            "episode": 17,
                            "episodeId": 70286861,
                            "trackId": 200257859
                        },
                        {
                            "season": 9,
                            "episode": 18,
                            "episodeId": 70286862,
                            "trackId": 200257859
                        },
                        {
                            "season": 9,
                            "episode": 19,
                            "episodeId": 70286863,
                            "trackId": 200257859
                        },
                        {
                            "season": 9,
                            "episode": 20,
                            "episodeId": 70286864,
                            "trackId": 200257859
                        },
                        {
                            "season": 9,
                            "episode": 21,
                            "episodeId": 70286865,
                            "trackId": 200257859
                        },
                        {
                            "season": 9,
                            "episode": 22,
                            "episodeId": 70286866,
                            "trackId": 200257859
                        },
                        {
                            "season": 9,
                            "episode": 23,
                            "episodeId": 70286867,
                            "trackId": 200257859
                        }
                    ]
                },
                "tt0367279": {
                    "name": "Arrested Development",
                    "trackId": 200257859,
                    "episodes": [
                        {
                            "season": 1,
                            "episode": 1,
                            "episodeId": 70133673,
                            "trackId": 200257859
                        },
                        {
                            "season": 1,
                            "episode": 2,
                            "episodeId": 70133674,
                            "trackId": 200257859
                        },
                        {
                            "season": 1,
                            "episode": 3,
                            "episodeId": 70133675,
                            "trackId": 200257859
                        },
                        {
                            "season": 1,
                            "episode": 4,
                            "episodeId": 70133677,
                            "trackId": 200257859
                        },
                        {
                            "season": 1,
                            "episode": 5,
                            "episodeId": 70133678,
                            "trackId": 200257859
                        },
                        {
                            "season": 1,
                            "episode": 6,
                            "episodeId": 70133676,
                            "trackId": 200257859
                        },
                        {
                            "season": 1,
                            "episode": 7,
                            "episodeId": 70133679,
                            "trackId": 200257859
                        },
                        {
                            "season": 1,
                            "episode": 8,
                            "episodeId": 70133680,
                            "trackId": 200257859
                        },
                        {
                            "season": 1,
                            "episode": 9,
                            "episodeId": 70133681,
                            "trackId": 200257859
                        },
                        {
                            "season": 1,
                            "episode": 10,
                            "episodeId": 70133682,
                            "trackId": 200257859
                        },
                        {
                            "season": 1,
                            "episode": 11,
                            "episodeId": 70133683,
                            "trackId": 200257859
                        },
                        {
                            "season": 1,
                            "episode": 12,
                            "episodeId": 70133684,
                            "trackId": 200257859
                        },
                        {
                            "season": 1,
                            "episode": 13,
                            "episodeId": 70133685,
                            "trackId": 200257859
                        },
                        {
                            "season": 1,
                            "episode": 14,
                            "episodeId": 70133686,
                            "trackId": 200257859
                        },
                        {
                            "season": 1,
                            "episode": 15,
                            "episodeId": 70133687,
                            "trackId": 200257859
                        },
                        {
                            "season": 1,
                            "episode": 16,
                            "episodeId": 70133688,
                            "trackId": 200257859
                        },
                        {
                            "season": 1,
                            "episode": 17,
                            "episodeId": 70133689,
                            "trackId": 200257859
                        },
                        {
                            "season": 1,
                            "episode": 18,
                            "episodeId": 70133690,
                            "trackId": 200257859
                        },
                        {
                            "season": 1,
                            "episode": 19,
                            "episodeId": 70133691,
                            "trackId": 200257859
                        },
                        {
                            "season": 1,
                            "episode": 20,
                            "episodeId": 70133692,
                            "trackId": 200257859
                        },
                        {
                            "season": 1,
                            "episode": 21,
                            "episodeId": 70133693,
                            "trackId": 200257859
                        },
                        {
                            "season": 1,
                            "episode": 22,
                            "episodeId": 70133694,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 1,
                            "episodeId": 70133695,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 2,
                            "episodeId": 70133696,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 3,
                            "episodeId": 70133697,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 4,
                            "episodeId": 70133698,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 5,
                            "episodeId": 70133699,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 6,
                            "episodeId": 70133700,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 7,
                            "episodeId": 70133701,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 8,
                            "episodeId": 70133702,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 9,
                            "episodeId": 70133703,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 10,
                            "episodeId": 70133704,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 11,
                            "episodeId": 70133705,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 12,
                            "episodeId": 70133706,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 13,
                            "episodeId": 70133707,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 14,
                            "episodeId": 70133708,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 15,
                            "episodeId": 70133709,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 16,
                            "episodeId": 70133710,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 17,
                            "episodeId": 70133711,
                            "trackId": 200257859
                        },
                        {
                            "season": 2,
                            "episode": 18,
                            "episodeId": 70133712,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 1,
                            "episodeId": 70133713,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 2,
                            "episodeId": 70133714,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 3,
                            "episodeId": 70133715,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 4,
                            "episodeId": 70133716,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 5,
                            "episodeId": 70133717,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 6,
                            "episodeId": 70133718,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 7,
                            "episodeId": 70133719,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 8,
                            "episodeId": 70133720,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 9,
                            "episodeId": 70133721,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 10,
                            "episodeId": 70133722,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 11,
                            "episodeId": 70133723,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 12,
                            "episodeId": 70133724,
                            "trackId": 200257859
                        },
                        {
                            "season": 3,
                            "episode": 13,
                            "episodeId": 70133725,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 1,
                            "episodeId": 70258267,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 2,
                            "episodeId": 70258269,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 3,
                            "episodeId": 70258271,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 4,
                            "episodeId": 70258268,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 5,
                            "episodeId": 70258273,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 6,
                            "episodeId": 70258270,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 7,
                            "episodeId": 70258274,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 8,
                            "episodeId": 70258272,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 9,
                            "episodeId": 70270313,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 10,
                            "episodeId": 70258276,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 11,
                            "episodeId": 70260130,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 12,
                            "episodeId": 70258275,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 13,
                            "episodeId": 70258278,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 14,
                            "episodeId": 70258277,
                            "trackId": 200257859
                        },
                        {
                            "season": 4,
                            "episode": 15,
                            "episodeId": 70258279,
                            "trackId": 200257859
                        }
                    ]
                }

            }

    }

    /**
     * return the shows
     */
    public getShows() {
        return this.shows;
    }
    /**
     * get a shows random episode
     * @param imdbId imdb id number of the show
     */
    public getRandomEpisode(imdbId: string) {
        let show = this.episodes[imdbId];
        console.log(show);
        if (show) {
            let episodes = show.episodes;
            let episode = episodes[Math.floor(Math.random() * Math.floor(episodes.length))];
            console.log(episode);
            return episode;
        }
        else {
            return null;
        }
    }
}