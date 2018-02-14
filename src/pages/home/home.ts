import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../shared/data.service';
import { Device } from "@ionic-native/device";
import { AppAvailability } from "@ionic-native/app-availability";
import { InAppBrowser } from "@ionic-native/in-app-browser";

import * as imdb from "imdb-api";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  shows: any[];
  descriptions: any[];
  constructor(
    public navCtrl: NavController,
    public dataService: DataService,
    public appAvail: AppAvailability,
    public device: Device,
    public inAppBrowser: InAppBrowser) {
    this.shows = dataService.getShows();
  }
  watchEpisode(show) {
    let episode = this.dataService.getRandomEpisode(show.imdbId);
    if (episode) {
      console.log(`Watching ${show.name}, Season ${episode.season} Episode ${episode.episode}`)
      this.openNetflix(episode.episodeId, episode.trackId);
    }
  }
  launchExternalApp(iosSchemaName: string, androidPackageName: string, appUrl: string, httpUrl: string) {
    let app: string;
    if (this.device.platform == 'iOS') {
      app = iosSchemaName;
    } else if (this.device.platform == 'Android') {
      app = androidPackageName;
    } else {
      let browser = this.inAppBrowser.create(httpUrl, '_system')
      return;
    }

    this.appAvail.check(app).then(
      () => {
        let browser = this.inAppBrowser.create(httpUrl, '_system');
      }
    )
  }

  openNetflix(episodeId: number, trackId: number) {
    this.launchExternalApp('', 'com.netflix.mediaclient', '', `https://www.netflix.com/watch/${episodeId}?trackId=${trackId}`)
  }
}
