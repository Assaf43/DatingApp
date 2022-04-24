import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Member } from 'src/app/_models/members';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css'],
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  @HostListener('window:beforeunload',['event']) unloadNotification(event: any) {
    if(this.editForm.dirty){
      event.returnValue = true;
    }
  }
  member: Member;
  user: User;

  constructor(
    private accuontService: AccountService,
    private memberService: MembersService,
    private toastrService: ToastrService
  ) {
    this.accuontService.currentUser$
      .pipe(take(1))
      .subscribe((user) => (this.user = user));
  }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    this.memberService
      .getMember(this.user.userName)
      .subscribe((member) => (this.member = member));
  }

  saveMember() {
    this.memberService.updateMember(this.member).subscribe(() => {
      this.toastrService.success('Added Success');
      this.editForm.reset(this.member);
    });
  }
}