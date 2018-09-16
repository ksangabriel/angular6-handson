import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit 
{
    allowNewServer: boolean = false;
    serverCreationStatus: string = 'No server was created!';
    serverCreated: boolean = false;
    serverName: string = '';
    servers : Array<String> = ['Test Server', 'Test Server 2'];

    constructor() { }

    ngOnInit() {
    }

    onCreateServer()
    {
      this.serverCreated = true;
      this.servers.push(this.serverName);
      this.serverCreationStatus = 'Server was created! Name is' + this.serverName;
    }

    onUpdateServerName(value: string)
    {
      console.log(value);
      this.serverName = value;
    }

}
