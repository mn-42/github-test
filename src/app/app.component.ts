import { Component } from '@angular/core';
import { NgcxTreeSampleData } from './samples/_model';
import { basicSample } from './samples/basic';
import { basicWithIcons } from './samples/basic-with-icons';
import { disableDnd } from './samples/disable-dnd';
import { disableDndOnLevels } from './samples/disable-dnd-by-level';
import { basicWithSelection } from './samples/long-texts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  samples: NgcxTreeSampleData[] = [
    basicSample,
    disableDnd,
    disableDndOnLevels,
    basicWithIcons,
    basicWithSelection,
  ];
}
