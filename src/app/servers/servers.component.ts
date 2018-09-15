import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;

  serverCreationStatus: string = 'No server was created!';

  serverName: string = '';

  constructor() { }

  ngOnInit() {
  }

  onCreateServer()
  {
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(value: string)
  {
    console.log(value);
    this.serverName = value;
  }

}
