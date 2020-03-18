import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/app/models/voiture';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.scss']
})
export class VoitureComponent implements OnInit {
voitures: Voiture[];

  constructor(private voitureService: VoitureService) { }

  isLoading: boolean;          
  ngOnInit() {
    this.isLoading = true;
    return this.voitureService.getVoitures().subscribe((data: Voiture[]) => {
      this.voitures = data; 
      this.isLoading = false; 
  });
}

}
