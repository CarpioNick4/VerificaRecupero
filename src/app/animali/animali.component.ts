import { Component, Input } from '@angular/core';
import { animali } from '../models/animali.models';

@Component({
  selector: 'app-animali',
  templateUrl: './animali.component.html',
  styleUrls: ['./animali.component.css']
})
export class AnimaliComponent {
  @Input() Animali : animali
}
