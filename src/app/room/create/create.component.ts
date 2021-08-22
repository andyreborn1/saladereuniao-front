import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'src/app/core/room.service';
import { Room } from 'src/app/model/room';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  id: number;
  create: FormGroup;
  room: Room;

  constructor(
    private fb: FormBuilder,
    private roomService: RoomService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  get f() {
    return this.create.controls;
  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    if (this.id) {
      this.roomService
        .findById(this.id)
        .subscribe((room) => this.createForm(room));
    } else {
      this.createForm(this.createEmptyForm());
    }
  }

  submit() {
    const room = this.create.getRawValue() as Room;
    if (this.id) {
      room.id = this.id;
      this.edit(room);
    } else {
      this.save(room);
    }
  }

  back() {}

  edit(room: Room) {
    this.roomService.save(room).subscribe();
  }

  private createForm(room: Room): void {
    this.create = this.fb.group({
      name: [room.name, [Validators.required]],
      date: [room.date, [Validators.required]],
      startHour: [room.startHour, [Validators.required]],
      endHour: [room.endHour, [Validators.required]],
    });
  }

  private createEmptyForm(): Room {
    return {
      id: null,
      name: null,
      date: null,
      startHour: null,
      endHour: null,
    } as unknown as Room;
  }

  private save(room: Room) {
    this.roomService.save(room).subscribe();
  }
}
