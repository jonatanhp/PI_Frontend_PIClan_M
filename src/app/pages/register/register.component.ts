import {Component, OnInit, OnDestroy} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {RegisterService} from '../../../providers/register/register.service';
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  public registerForm: FormGroup;
  public activeModal: NgbActiveModal
  error: string;
  registerService:RegisterService;
  //router:Router;
  public s:string;

  constructor(private formBuilder:FormBuilder, public htt:HttpClient, public router:Router  ){
    this.registerForm = this.formBuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required]],
      ap_pat:['',[Validators.required]],
      ap_mat:['',[Validators.required]],
      dni:['',[Validators.required]],
      telefono:['',[Validators.required]],
      sexo:['',[Validators.required]],
      fecha_nac:['',[Validators.required]],
      ubigeo_id:['',[Validators.required]],
      password:['',[Validators.required]],
      c_password:['',[Validators.required]]
    });
  }

  /*constructor(private formBuilder: FormBuilder, private registerService: RegisterService, private router: Router) { 

    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });


  }*/

  ngOnInit() {
    
    this.registerForm;
    this.activeModal;
    console.log('login');
  }

  ngOnDestroy() {
  }

  public register(): void {
    console.log(this.registerForm.value);
    new RegisterService(this.htt).Register(this.registerForm.value).subscribe(

      response => {
        this.redirectInto();
        if (response.data.token) {
          localStorage.setItem('accessToken', response.data.token);
          if (localStorage.getItem('accessToken')) {
            this.redirectInto();
          }
        }
      }, error => {
        this.error = error;
      }
    );
    //new RegisterService(this.htt).Register(this.registerForm.value).subscribe(response => {
      console.log("asdf");
      /*if (response.data.token) {
        localStorage.setItem('accessToken', response.data.token);
        if (localStorage.getItem('accessToken')) {
          this.redirectInto();
        }
      }*/
    /*}, error => {
      this.error = error;
    });*/
  }

  public save($event):void{
    if($event){
      console.log("intento registro");
      //this.activeModal.close(this.registerForm.value);
      this.registerService.Register(this.registerForm.value).subscribe
    }
    if (this.registerForm.valid){
      this.activeModal.close(this.registerForm.value);
      this.registerService.Register(this.registerForm.value).subscribe
    }

    //this.registerService.Register()
  }

  redirectInto(): void {
    
    this.router.navigate(['dashboard']);
  }

}
