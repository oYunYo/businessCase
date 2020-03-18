import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/app/models/voiture';
import { VoitureService } from 'src/app/services/voiture.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.scss']
})
export class AddVoitureComponent implements OnInit {
  voitureForm = new Voiture();

  constructor(private voitureService: VoitureService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {   
    this.voitureService.addVoiture(this.voitureForm).subscribe(then => {       
      this.router.navigate(['/voitures']);   
    }); 
  }
}
