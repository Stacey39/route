import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverId:number;
  constructor(private serversService: ServersService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.serverId = Number(this.route.snapshot.params['id']);
    if(!this.serverId){
      this.serverId=1;
    }
    this.server = this.serversService.getServer(this.serverId);
    this.route.params.subscribe(
      (params:Params)=>{
        this.server=this.serversService.getServer(Number(params['id']));
      }
    );
  }

}
