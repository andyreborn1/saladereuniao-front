import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/core/room.service';
import { Room } from 'src/app/model/room';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  rooms: Room[] = [];

  constructor(
    private roomService: RoomService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listRooms();
  }

  private listRooms() {
    this.roomService.findAll().subscribe((room: Room[]) => (this.rooms = room));
  }

  open(id: number) {
    this.router.navigate(['/rooms/create/' + id]);
  }

  delete(id: number) {
    this.roomService.delete(id).subscribe();
    this.listRooms();
  }
}
