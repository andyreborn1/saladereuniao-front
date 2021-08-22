import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'src/app/core/room.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  id: number;
  create: FormGroup;

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
    }
  }

  submit() {}

  back() {}
}
