import {Component, OnInit} from '@angular/core';
import {BigOvenModelAPI2FolderProperty, BigOvenModelAPI2RecipeSearchResult} from "../../../../../output/models";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../shared/services/user.service";
import {BigOvenAuthService} from "../../../shared/services/bigovenauth.service";
import {faPhotoVideo, faList, faEdit} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.scss']
})
export class MyRecipesComponent implements OnInit {

  faPhotoVideo = faPhotoVideo;
  faList = faList;
  faEdit = faEdit;

  recipesInActiveFolder: BigOvenModelAPI2RecipeSearchResult;
  private subscriptionFoldersFetched: any = null;
  private subscriptionFolderChanged: any = null;
  private subscriptionNewRecipesLoaded: any = null;
  folders: BigOvenModelAPI2FolderProperty[] = [];
  activeFolder: BigOvenModelAPI2FolderProperty = null;
  currentView: string = "gallery";
  homeFolder: string = "Added";



  recipesText: string;

  constructor(
    public userService: UserService,
    public authService: BigOvenAuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {

    if (this.subscriptionNewRecipesLoaded === null) {
      this.subscriptionNewRecipesLoaded = this.userService.getonRecipesLoadedForFolderEmitter()
        .subscribe(status => this.recipesReloaded(status));
    }
    // subscribe to folder change

    if (this.subscriptionFolderChanged === null) {
      this.subscriptionFolderChanged = this.userService.getOnFolderChangedEventEmitter()
        .subscribe(activeFolder => this.folderChanged(activeFolder));

    }



    // get the params on the route
    console.log("currentView");
    console.log(this.route.snapshot);
    console.log(this.route.snapshot.params['view']);
    if (this.route.snapshot.params['view'] === undefined) {
      this.currentView = "gallery";
    } else {
      this.currentView = this.route.snapshot.params['view'];
    }


    // do we need to update the screen?
    if (this.userService.folders.length == 0) {
      if (this.subscriptionFoldersFetched === null) {
        this.subscriptionFoldersFetched = this.userService.getOnCompletedEventEmitter()
          .subscribe(status => this.onComplete(status));
      }
      this.userService.getFolders();
    } else {
      this.folders = this.userService.folders;
      this.activeFolder = this.userService.activeFolder;
      this.recipesInActiveFolder = this.userService.recipesInActiveFolder;
    }

  }

  showGallery() {
    this.currentView = "gallery";
  }

  showList() {
    this.currentView = "list";
  }

  showNotes() {
    this.currentView = "notes";
  }



  folderChanged(activeFolder: BigOvenModelAPI2FolderProperty) {
    this.activeFolder = activeFolder;
    if (this.subscriptionFolderChanged === null) {
      this.activeFolder.Name = this.homeFolder;
      this.userService.getRecipesInFolder(activeFolder, this.authService.userIdFromJWT());
    } else {
      // now load the results
      this.userService.getRecipesInFolder(activeFolder, this.authService.userIdFromJWT());
    }
  }

  recipesReloaded(status) {
    console.log("recipes reloaded");
    this.recipesInActiveFolder = this.userService.recipesInActiveFolder;
  }

  onComplete(status) {
    console.log('folder fetch complete');

    this.recipesInActiveFolder = this.userService.recipesInActiveFolder;

    this.folders = this.userService.folders;


  }

}
