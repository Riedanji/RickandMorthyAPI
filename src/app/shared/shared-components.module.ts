import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { AllEpisodesComponent } from './all-episodes/all-episodes.component';

@NgModule({
  declarations: [AllCharactersComponent, AllEpisodesComponent],
  imports: [
    CommonModule
  ],
  exports: [AllCharactersComponent, AllEpisodesComponent]
})


export class SharedComponentsModule { }
