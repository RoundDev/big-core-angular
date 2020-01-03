import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {BigOvenModelAPI2FolderProperty} from "../../../../../output/models";
import {UserService} from "../../../shared/services/user.service";
import {faFolder, faFolderOpen} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.scss']
})
export class FolderListComponent implements OnInit {

  onFolderChanged: EventEmitter<BigOvenModelAPI2FolderProperty> = new EventEmitter<BigOvenModelAPI2FolderProperty>();

  faFolder = faFolder;
  faFolderOpen = faFolderOpen;

  @Input()
  activeFolder: BigOvenModelAPI2FolderProperty;
  @Input()
  folders: BigOvenModelAPI2FolderProperty[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.activeFolder = this.userService.activeFolder;
  }

  toggleFolder(folder)
  {
    this.activeFolder = folder;
    this.userService.activeFolder = folder;

    // now fetch and display
    console.log(this.activeFolder);

    this.userService.getOnFolderChangedEventEmitter().emit(this.activeFolder);

  }

}
