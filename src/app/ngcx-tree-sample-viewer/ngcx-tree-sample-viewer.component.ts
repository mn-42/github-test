import { Component, Input, OnInit } from '@angular/core';
import { NgcxTreeSampleData } from '../samples/_model';

@Component({
  selector: 'app-ngcx-tree-sample-viewer',
  templateUrl: './ngcx-tree-sample-viewer.component.html',
  styleUrls: ['./ngcx-tree-sample-viewer.component.scss'],
})
export class NgcxTreeSampleViewerComponent implements OnInit {
  @Input()
  sample!: NgcxTreeSampleData;

  htmlCode?: string;
  shownContent: string = 'SAMPLE';

  ngOnInit() {
    this.htmlCode = this.sample.config
      ? '<ngcx-tree [nodes]="nodes" [config]="config"></ngcx-tree>'
      : '<ngcx-tree [nodes]="nodes"></ngcx-tree>';
  }
}