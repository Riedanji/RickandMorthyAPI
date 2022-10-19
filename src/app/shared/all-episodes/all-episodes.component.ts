import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { EpisodeDetailComponent } from '../episode-detail/episode-detail.component';
@Component({
  selector: 'app-all-episodes',
  templateUrl: './all-episodes.component.html',
  styleUrls: ['./all-episodes.component.scss'],
})
export class AllEpisodesComponent implements OnInit {
  
  allEpisodes: any;


  constructor(
    private randmService: RickAndMortyService,
    private modalController: ModalController
    ) { }

  ngOnInit() {
    this.randmService.getAllEpisodes().then( (res: any) => {
      this.allEpisodes = res;
      console.log (this.allEpisodes);
    });
  }
  
  async openModal(data: any) {
    const modal = await this.modalController.create({
    component: EpisodeDetailComponent,
    componentProps: { episode: data }
    });
    return await modal.present();
   }
}
