import {Component} from '@angular/core';
import {Navigator} from '../navigator/navigator';
import {FormsModule} from "@angular/forms";
import {
  TuiDataListComponent,
  TuiLabel, TuiOptionWithValue, TuiSelectLike,
  TuiTextfieldComponent,
  TuiTextfieldDirective, TuiTextfieldDropdownDirective,
  TuiTextfieldMultiComponent
} from "@taiga-ui/core";
import {
  TuiChevron, TuiDataListWrapperComponent,
  TuiFilterByInputPipe,
  TuiInputChipComponent,
  TuiInputChipDirective,
  TuiMultiSelectGroupComponent, TuiMultiSelectGroupDirective
} from '@taiga-ui/kit';
import {TuiItem,} from '@taiga-ui/cdk';
import {Cat} from '../cat';
import { CatService } from '../cat-service';
import {CatCard} from '../cat-card/cat-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, Navigator, FormsModule, TuiLabel, TuiTextfieldComponent, TuiTextfieldDirective, TuiTextfieldMultiComponent, TuiChevron, TuiInputChipDirective,  TuiTextfieldDropdownDirective,  TuiSelectLike, TuiDataListWrapperComponent, TuiMultiSelectGroupDirective, CatCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
  standalone: true
})
export class HomePage {
  value = "";
  tags: string[] = [];
  allTags: string[] = [];

  constructor(private catService: CatService){
    this.allTags = this.catService.getAllTags();
  }

  get filteredCats(): Cat[] {
    return this.catService.filterCats(this.value, this.tags);
  }
}
