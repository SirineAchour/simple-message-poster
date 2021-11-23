import { Component, OnInit } from '@angular/core';
import { HttpService } from './sevices/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'simple-message-poster';
  message: string | any;
  disable_button: boolean | any;
  loading: boolean | any;
  messages: any[]|any

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.disable_button = false;
    this.message = '';
    this.loading = false;
    this.messages = []
    this.get()
  }

  post() {
    if (this.message && this.message.length != 0) {
      this.disable_button = true;
      console.log(this.message);
      this.http.post_message(this.message).subscribe(
        (res) => {
          console.log('posted :)');
          this.message = '';
          this.disable_button = false;
          this.get()
        },
        (err) => {
          console.log('something went wrong :(');
          this.message = '';
          this.disable_button = false;
        }
      );
    }
  }

  get() {
    this.loading = true;
    this.http.get_messages().subscribe(
      (res: any[]|any) => {
        console.log('gotem :)');
        console.log(res);
        this.messages = res.reverse().map((e:any)=>{return {id: e.id, message: e.message, timestamp: (new Date(parseInt(e.timestamp)).toLocaleString())}})
        console.log(this.messages)
        this.loading = false;
      },
      (err) => {
        console.log('something went wrong :(');
        this.loading = false;      }
    );
  }

  delete(id:any){
    this.http.delete_message(id).subscribe(
      (res:any) => {
       this.get()
      },
      (err:any) => {
        console.log('something went wrong :(');
      }
    );
  }
}
