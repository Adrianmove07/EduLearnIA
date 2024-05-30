import { Component, OnInit } from '@angular/core';
import { IconUserModel } from '../../../_metronic/partials';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.component.html',
  // styleUrls: ['./mis-cursos.component.scss']
})


export class MisCursosComponent implements OnInit {

  users1: Array<IconUserModel> = [
    { name: 'Emma Smith', avatar: './assets/media/avatars/300-6.jpg' },
    { name: 'Rudy Stone', avatar: './assets/media/avatars/300-1.jpg' },
    { name: 'Susan Redwood', initials: 'S', color: 'primary' },
  ];

  users2 = [
    { name: 'Alan Warden', initials: 'A', color: 'warning' },
    { name: 'Brian Cox', avatar: './assets/media/avatars/300-5.jpg' },
  ];

  users3 = [
    { name: 'Mad Masy', avatar: './assets/media/avatars/300-6.jpg' },
    { name: 'Cris Willson', avatar: './assets/media/avatars/300-1.jpg' },
    { name: 'Mike Garcie', initials: 'M', color: 'info' },
  ];

  description: any;
  page = 4;
  pageSize = 10;
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: IDropdownSettings = {};
  constructor(
    private toastr: ToastrService,
    public modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    // this.showSuccess();
    // this.modalService.open()

    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      // itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
}
