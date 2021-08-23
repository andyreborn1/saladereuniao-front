import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'src/app/core/room.service';
import { Alert } from 'src/app/model/alert';
import { Room } from 'src/app/model/room';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';

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
    public dialog: MatDialog,
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
    this.create.markAllAsTouched();
    if (this.create.invalid) {
      return;
    }

    const room = this.create.getRawValue() as Room;
    if (this.id) {
      room.id = this.id;
      this.edit(room);
    } else {
      this.save(room);
    }
  }

  reset() {
    this.create.reset();
  }

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
    this.roomService.save(room).subscribe(
      () => {
        const config = {
          data: {
            btnOk: 'Ir para inicio',
            btnCancel: 'Cadastrar nova reunião',
            colorBtnCancel: 'primary',
            hasBtnClose: true,
          } as Alert,
        };

        const dialogRef = this.dialog.open(AlertComponent, config);
        dialogRef.afterClosed().subscribe((option: boolean) => {
          if (option) {
            this.router.navigateByUrl('rooms');
          } else {
            this.reset();
          }
        });
      },
      () => {
        const config = {
          data: {
            title: 'Erro ao editar registro',
            description: 'Não foi possível editar o seu registro',
            colorBtnOk: 'warm',
            btnOk: 'Fechar',
          } as Alert,
        };
        this.dialog.open(AlertComponent, config);
      }
    );
  }
}
